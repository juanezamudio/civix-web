'use client'

import { Prisma } from '@prisma/client'
import { useState, useEffect } from 'react'
import { Typography, Input, Select, Card, Row, Col, Space } from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ResourcesPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchKeyword, setSearchKeyword] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredResources, setFilteredResources] = useState<
    Prisma.ResourceGetPayload<{ include: { category: true } }>[]
  >([])

  const { data: resources, isLoading: isLoadingResources } =
    Api.resource.findMany.useQuery({
      include: { category: true },
    })

  const { data: categories, isLoading: isLoadingCategories } =
    Api.category.findMany.useQuery({})

  useEffect(() => {
    if (resources) {
      setFilteredResources(resources)
    }
  }, [resources])

  useEffect(() => {
    if (resources) {
      const filtered = resources.filter(
        resource =>
          (selectedCategory
            ? resource.categoryId === selectedCategory
            : true) &&
          (searchKeyword
            ? resource.name
                .toLowerCase()
                .includes(searchKeyword.toLowerCase()) ||
              resource.description
                ?.toLowerCase()
                .includes(searchKeyword.toLowerCase())
            : true),
      )
      setFilteredResources(filtered)
    }
  }, [selectedCategory, searchKeyword, resources])

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
  }

  const handleSearch = (value: string) => {
    setSearchKeyword(value)
  }

  const handleResourceClick = (resourceId: string) => {
    router.push(`/resources/${resourceId}`)
  }

  if (isLoadingResources || isLoadingCategories) {
    return (
      <PageLayout layout="narrow">
        <Text>Loading...</Text>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Local Civic Resources Directory</Title>
        <Paragraph>
          Browse and discover ways to engage with your community. Use the
          filters and search to find specific resources.
        </Paragraph>

        <Space>
          <Input
            placeholder="Search resources"
            prefix={<SearchOutlined />}
            onChange={e => handleSearch(e.target.value)}
            style={{ width: 300 }}
          />
          <Select
            style={{ width: 200 }}
            placeholder="Filter by category"
            onChange={handleCategoryChange}
            allowClear
          >
            {categories?.map(category => (
              <Select.Option key={category.id} value={category.id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Space>

        <Row gutter={[16, 16]}>
          {filteredResources?.map(resource => (
            <Col xs={24} sm={12} md={8} key={resource.id}>
              <Card
                title={resource.name}
                extra={<FilterOutlined />}
                hoverable
                onClick={() => handleResourceClick(resource.id)}
              >
                <Paragraph ellipsis={{ rows: 2 }}>
                  {resource.description}
                </Paragraph>
                <Text type="secondary">{resource.category?.name}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </PageLayout>
  )
}
