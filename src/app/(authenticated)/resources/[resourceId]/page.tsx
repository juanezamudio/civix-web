'use client'

import { Typography, Card, Button, Space, Spin, Row, Col } from 'antd'
import { HeartOutlined, HeartFilled, ShareAltOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ResourceDetailsPage() {
  const router = useRouter()
  const params = useParams<{ resourceId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isFavorite, setIsFavorite] = useState(false)

  const {
    data: resource,
    isLoading,
    refetch,
  } = Api.resource.findUnique.useQuery({
    where: { id: params.resourceId },
    include: { category: true, userResources: true },
  })

  const { mutateAsync: createUserResource } =
    Api.userResource.create.useMutation()
  const { mutateAsync: deleteUserResource } =
    Api.userResource.delete.useMutation()

  useEffect(() => {
    if (resource && user) {
      setIsFavorite(resource.userResources.some(ur => ur.userId === user.id))
    }
  }, [resource, user])

  const handleFavoriteToggle = async () => {
    if (!user) {
      enqueueSnackbar('Please log in to save resources', { variant: 'info' })
      return
    }

    try {
      if (isFavorite) {
        const userResourceToDelete = resource?.userResources.find(
          ur => ur.userId === user.id,
        )
        if (userResourceToDelete) {
          await deleteUserResource({ where: { id: userResourceToDelete.id } })
        }
      } else {
        await createUserResource({
          data: {
            user: { connect: { id: user.id } },
            resource: { connect: { id: resource?.id } },
            accessDate: new Date().toISOString(),
          },
        })
      }
      setIsFavorite(!isFavorite)
      refetch()
      enqueueSnackbar(
        isFavorite
          ? 'Resource removed from favorites'
          : 'Resource added to favorites',
        { variant: 'success' },
      )
    } catch (error) {
      enqueueSnackbar('Failed to update favorites', { variant: 'error' })
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: resource?.name,
          text: resource?.description,
          url: window.location.href,
        })
        .then(() => {
          enqueueSnackbar('Resource shared successfully', {
            variant: 'success',
          })
        })
        .catch(error => {
          console.error('Error sharing', error)
          enqueueSnackbar('Failed to share resource', { variant: 'error' })
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

  if (!resource) {
    return (
      <PageLayout layout="narrow">
        <Title level={2}>Resource not found</Title>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Card>
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <Title level={2}>{resource.name}</Title>
          </Col>
          <Col xs={24}>
            <Paragraph>{resource.description}</Paragraph>
          </Col>
          <Col xs={24}>
            <Paragraph>
              <strong>Category:</strong> {resource.category?.name}
            </Paragraph>
          </Col>
          {resource.resourceUrl && (
            <Col xs={24}>
              <Paragraph>
                <strong>Resource URL:</strong>{' '}
                <a
                  href={resource.resourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.resourceUrl}
                </a>
              </Paragraph>
            </Col>
          )}
          <Col xs={24}>
            <Space>
              <Button
                icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
                onClick={handleFavoriteToggle}
              >
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </Button>
              <Button icon={<ShareAltOutlined />} onClick={handleShare}>
                Share
              </Button>
            </Space>
          </Col>
        </Row>
      </Card>
    </PageLayout>
  )
}
