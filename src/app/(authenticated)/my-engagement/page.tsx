'use client'

import {
  Typography,
  Card,
  List,
  Progress,
  Statistic,
  Row,
  Col,
  Form,
  Input,
  Button,
} from 'antd'
import {
  CalendarOutlined,
  BookOutlined,
  TrophyOutlined,
  LineChartOutlined,
} from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MyEngagementPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [goals, setGoals] = useState<string[]>([])
  const [newGoal, setNewGoal] = useState('')

  const { data: userEvents, isLoading: eventsLoading } =
    Api.userEvent.findMany.useQuery({
      where: { userId: user?.id },
      include: { event: true },
    })

  const { data: userResources, isLoading: resourcesLoading } =
    Api.userResource.findMany.useQuery({
      where: { userId: user?.id },
      include: { resource: true },
    })

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, newGoal.trim()])
      setNewGoal('')
      enqueueSnackbar('Goal added successfully', { variant: 'success' })
    }
  }

  const calculateEngagementStats = () => {
    const totalEvents = userEvents?.length || 0
    const totalResources = userResources?.length || 0
    const lastMonth = dayjs().subtract(1, 'month')
    const recentEvents =
      userEvents?.filter(ue => dayjs(ue.dateCreated).isAfter(lastMonth))
        .length || 0
    const recentResources =
      userResources?.filter(ur => dayjs(ur.dateCreated).isAfter(lastMonth))
        .length || 0

    return {
      totalEngagements: totalEvents + totalResources,
      recentEngagements: recentEvents + recentResources,
      eventPercentage: totalEvents ? (recentEvents / totalEvents) * 100 : 0,
      resourcePercentage: totalResources
        ? (recentResources / totalResources) * 100
        : 0,
    }
  }

  const stats = calculateEngagementStats()

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Civic Engagement</Title>
      <Paragraph>
        Track your civic activities, set goals, and view your progress over
        time.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <CalendarOutlined /> Events Attended
              </>
            }
          >
            <List
              loading={eventsLoading}
              dataSource={userEvents}
              renderItem={item => (
                <List.Item>
                  <Text>
                    {item.event?.name} -{' '}
                    {dayjs(item.event?.startDate).format('MMM D, YYYY')}
                  </Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <BookOutlined /> Resources Used
              </>
            }
          >
            <List
              loading={resourcesLoading}
              dataSource={userResources}
              renderItem={item => (
                <List.Item>
                  <Text>{item.resource?.name}</Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Card
        title={
          <>
            <TrophyOutlined /> Civic Engagement Goals
          </>
        }
        style={{ marginTop: 16 }}
      >
        <List
          dataSource={goals}
          renderItem={item => (
            <List.Item>
              <Text>{item}</Text>
            </List.Item>
          )}
        />
        <Form layout="inline" onFinish={addGoal} style={{ marginTop: 16 }}>
          <Form.Item>
            <Input
              placeholder="Enter a new goal"
              value={newGoal}
              onChange={e => setNewGoal(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Goal
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card
        title={
          <>
            <LineChartOutlined /> Engagement Statistics
          </>
        }
        style={{ marginTop: 16 }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Statistic
              title="Total Engagements"
              value={stats.totalEngagements}
            />
          </Col>
          <Col xs={24} sm={12}>
            <Statistic
              title="Recent Engagements (Last Month)"
              value={stats.recentEngagements}
            />
          </Col>
          <Col xs={24} sm={12}>
            <Paragraph>Event Participation (Last Month)</Paragraph>
            <Progress percent={Math.round(stats.eventPercentage)} />
          </Col>
          <Col xs={24} sm={12}>
            <Paragraph>Resource Usage (Last Month)</Paragraph>
            <Progress percent={Math.round(stats.resourcePercentage)} />
          </Col>
        </Row>
      </Card>
    </PageLayout>
  )
}
