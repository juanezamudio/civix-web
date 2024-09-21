'use client'

import { useUserContext } from '@/core/context'
import { useUploadPublic } from '@/core/hooks/upload'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { DeleteOutlined, EditOutlined, UploadOutlined } from '@ant-design/icons'
import {
  Button,
  Form,
  Input,
  Modal,
  Space,
  Table,
  Typography,
  Upload,
} from 'antd'
import type { UploadFile } from 'antd/es/upload/interface'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
const { Title, Text } = Typography

export default function RAGContextManagementPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [ragVectors, setRagVectors] = useState<any[]>([])
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingVector, setEditingVector] = useState<any>(null)
  const [form] = Form.useForm()

  const {
    data: vectors,
    isLoading,
    refetch,
  } = Api.ragVector.findMany.useQuery({})
  const { mutateAsync: loadFile } = Api.rag.loadFile.useMutation()
  const { mutateAsync: deleteVector } = Api.ragVector.delete.useMutation()
  const { mutateAsync: updateVector } = Api.ragVector.update.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  useEffect(() => {
    if (vectors) {
      setRagVectors(vectors)
    }
  }, [vectors])

  const handleUpload = async (file: File) => {
    try {
      const { url } = await upload({ file })
      const { key } = await loadFile({ url })
      enqueueSnackbar('File uploaded and added to RAG context successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error uploading file', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteVector({ where: { id } })
      enqueueSnackbar('Vector deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error deleting vector', { variant: 'error' })
    }
  }

  const showEditModal = (vector: any) => {
    setEditingVector(vector)
    form.setFieldsValue({ tags: JSON.stringify(vector.tags) })
    setIsModalVisible(true)
  }

  const handleEdit = async (values: any) => {
    try {
      const updatedTags = JSON.parse(values.tags)
      await updateVector({
        where: { id: editingVector.id },
        data: { tags: updatedTags },
      })
      enqueueSnackbar('Vector updated successfully', { variant: 'success' })
      setIsModalVisible(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Error updating vector', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Key',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags: any) => JSON.stringify(tags),
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() => showEditModal(record)}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            danger
          />
        </Space>
      ),
    },
  ]

  // if (!user?.checkRole('admin')) {
  //   router.push('/home')
  //   return null
  // }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>RAG Context Management</Title>
      <Text>
        Upload and manage documents for the AI chatbot to provide up-to-date
        information about local civic matters.
      </Text>

      <Upload
        fileList={fileList}
        beforeUpload={file => {
          setFileList([file])
          return false
        }}
        onRemove={() => setFileList([])}
      >
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        type="primary"
        onClick={() => fileList[0] && handleUpload(fileList[0] as any)}
        disabled={fileList.length === 0}
        style={{ marginTop: 16, marginBottom: 16 }}
      >
        Upload to RAG Context
      </Button>

      <Table
        columns={columns}
        dataSource={ragVectors}
        rowKey="id"
        loading={isLoading}
      />

      <Modal
        title="Edit Vector Tags"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleEdit}>
          <Form.Item
            name="tags"
            label="Tags"
            rules={[{ required: true, message: 'Please input the tags' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Tags
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
