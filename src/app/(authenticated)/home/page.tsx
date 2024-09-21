'use client'

import { Typography, Card, Row, Col, Button } from 'antd'
import {
  CalendarOutlined,
  BookOutlined,
  RobotOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: events, isLoading: eventsLoading } =
    Api.event.findMany.useQuery({
      take: 3,
      orderBy: { startDate: 'asc' },
      where: { startDate: { gte: new Date() } },
      include: { category: true, location: true },
    })

  const { data: resources, isLoading: resourcesLoading } =
    Api.resource.findMany.useQuery({
      take: 3,
      include: { category: true },
    })

  const handleEventClick = (eventId: string) => {
    router.push(`/events/${eventId}`)
  }

  const handleResourceClick = (resourceId: string) => {
    router.push(`/resources/${resourceId}`)
  }

  const handleChatbotClick = () => {
    router.push('/chatbot')
  }

  return (
    <PageLayout layout="narrow">
      <Title level={1}>Civic Engagement Dashboard</Title>
      <Text>
        Welcome to your hub for local events and resources. Get involved in your
        community!
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <CalendarOutlined /> Upcoming Events
              </>
            }
            loading={eventsLoading}
          >
            {events?.map(event => (
              <Card.Grid
                key={event.id}
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => handleEventClick(event.id)}
              >
                <Title level={5}>{event.name}</Title>
                <Text>
                  {dayjs(event.startDate).format('MMM D, YYYY h:mm A')}
                </Text>
                <br />
                <Text type="secondary">{event.location?.name}</Text>
              </Card.Grid>
            ))}
            {events?.length === 0 && <Text>No upcoming events</Text>}
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <BookOutlined /> Resources
              </>
            }
            loading={resourcesLoading}
          >
            {resources?.map(resource => (
              <Card.Grid
                key={resource.id}
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => handleResourceClick(resource.id)}
              >
                <Title level={5}>{resource.name}</Title>
                <Text>{resource.category?.name}</Text>
              </Card.Grid>
            ))}
            {resources?.length === 0 && <Text>No resources available</Text>}
          </Card>
        </Col>
      </Row>

      <Card style={{ marginTop: '24px' }}>
        <Row align="middle" justify="space-between">
          <Col>
            <Title level={4} style={{ margin: 0 }}>
              <RobotOutlined /> AI Chatbot
            </Title>
            <Text>Get personalized recommendations for civic activities</Text>
          </Col>
          <Col>
            <Button type="primary" onClick={handleChatbotClick}>
              Chat Now
            </Button>
          </Col>
        </Row>
      </Card>
    </PageLayout>
  )
}
