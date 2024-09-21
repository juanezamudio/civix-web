'use client'

import { Typography, Button, Space, Spin, Row, Col, Card } from 'antd'
import {
  CalendarOutlined,
  ShareAltOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EventDetailsPage() {
  const router = useRouter()
  const params = useParams<{ eventId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: event, isLoading } = Api.event.findUnique.useQuery({
    where: { id: params.eventId },
    include: { category: true, location: true },
  })

  const { mutateAsync: addToCalendar } = Api.userEvent.create.useMutation()

  const handleAddToCalendar = async () => {
    try {
      await addToCalendar({
        data: {
          status: 'Attending',
          user: { connect: { id: user?.id } },
          event: { connect: { id: params.eventId } },
        },
      })
      enqueueSnackbar('Event added to your calendar', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to add event to calendar', { variant: 'error' })
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: event?.name,
          text: event?.description,
          url: window.location.href,
        })
        .then(() => {
          enqueueSnackbar('Event shared successfully', { variant: 'success' })
        })
        .catch(() => {
          enqueueSnackbar('Failed to share event', { variant: 'error' })
        })
    } else {
      enqueueSnackbar('Sharing is not supported on this device', {
        variant: 'info',
      })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!event) {
    return (
      <PageLayout layout="narrow">
        <Title level={2}>Event not found</Title>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>{event.name}</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={16}>
            <Card>
              <Paragraph>{event.description}</Paragraph>
              <Space direction="vertical">
                <Text strong>
                  <CalendarOutlined /> Date:
                </Text>
                <Text>
                  {dayjs(event.startDate).format('MMMM D, YYYY h:mm A')} -
                  {dayjs(event.endDate).format('MMMM D, YYYY h:mm A')}
                </Text>
                {event.location && (
                  <>
                    <Text strong>
                      <EnvironmentOutlined /> Location:
                    </Text>
                    <Text>{`${event.location.name}, ${event.location.address}, ${event.location.city}, ${event.location.state}, ${event.location.country}`}</Text>
                  </>
                )}
                {event.category && (
                  <>
                    <Text strong>Category:</Text>
                    <Text>{event.category.name}</Text>
                  </>
                )}
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Button
                  type="primary"
                  icon={<CalendarOutlined />}
                  onClick={handleAddToCalendar}
                  block
                >
                  Add to My Calendar
                </Button>
                <Button icon={<ShareAltOutlined />} onClick={handleShare} block>
                  Share Event
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    </PageLayout>
  )
}
