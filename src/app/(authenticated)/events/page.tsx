'use client'

import { useState, useEffect } from 'react'
import { Typography, Input, Select, Card, List, Space, Row, Col } from 'antd'
import {
  CalendarOutlined,
  SearchOutlined,
  FilterOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EventsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchKeyword, setSearchKeyword] = useState('')
  const [selectedEventType, setSelectedEventType] = useState<string | null>(
    null,
  )

  const {
    data: events,
    isLoading,
    refetch,
  } = Api.event.findMany.useQuery({
    include: { category: true, location: true },
  })

  const { data: categories } = Api.category.findMany.useQuery({})

  const filteredEvents = events?.filter(event => {
    const matchesKeyword =
      event.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      event.description?.toLowerCase().includes(searchKeyword.toLowerCase())
    const matchesType =
      !selectedEventType || event.category?.name === selectedEventType
    return matchesKeyword && matchesType
  })

  const handleEventClick = (eventId: string) => {
    router.push(`/events/${eventId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Local Government Events</Title>
        <Text>
          Browse and find opportunities to participate in civic activities.
        </Text>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Input
              placeholder="Search events"
              prefix={<SearchOutlined />}
              value={searchKeyword}
              onChange={e => setSearchKeyword(e.target.value)}
            />
          </Col>
          <Col xs={24} sm={12}>
            <Select
              style={{ width: '100%' }}
              placeholder="Filter by event type"
              allowClear
              onChange={value => setSelectedEventType(value)}
            >
              {categories?.map(category => (
                <Select.Option key={category.id} value={category.name}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </Col>
        </Row>

        {isLoading ? (
          <Text>Loading events...</Text>
        ) : (
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 }}
            dataSource={filteredEvents}
            renderItem={event => (
              <List.Item>
                <Card
                  hoverable
                  onClick={() => handleEventClick(event.id)}
                  title={event.name}
                  extra={<CalendarOutlined />}
                >
                  <p>{event.description}</p>
                  <p>
                    <strong>Type:</strong> {event.category?.name}
                  </p>
                  <p>
                    <strong>Date:</strong>{' '}
                    {event.startDate &&
                      dayjs(event.startDate).format('MMMM D, YYYY')}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.location?.name}
                  </p>
                </Card>
              </List.Item>
            )}
          />
        )}
      </Space>
    </PageLayout>
  )
}
