'use client'

import { useState, useEffect } from 'react'
import { Typography, Input, Button, List, Spin, Card } from 'antd'
import { SendOutlined, RobotOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AIChatbotPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<any[]>([])
  const [chatSessionId, setChatSessionId] = useState<string | null>(null)

  const {
    data: chatSessions,
    isLoading: isLoadingChatSessions,
    refetch: refetchChatSessions,
  } = Api.chatSession.findMany.useQuery({
    where: { userId: user?.id },
    include: { messages: true },
    orderBy: { startTime: 'desc' },
  })

  const { mutateAsync: createChatSession } =
    Api.chatSession.create.useMutation()
  const { mutateAsync: createMessage } = Api.message.create.useMutation()
  const { mutateAsync: generateText } = Api.ai.generateText.useMutation()

  useEffect(() => {
    if (chatSessions && chatSessions.length > 0) {
      setChatSessionId(chatSessions[0].id)
      setMessages(chatSessions[0].messages || [])
    }
  }, [chatSessions])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    let sessionId = chatSessionId
    if (!sessionId) {
      const newSession = await createChatSession({
        data: {
          userId: user?.id,
          startTime: new Date().toISOString(),
        },
      })
      sessionId = newSession.id
      setChatSessionId(sessionId)
    }

    const userMessage = await createMessage({
      data: {
        content: input,
        isUserMessage: true,
        chatSessionId: sessionId,
        timestamp: new Date().toISOString(),
      },
    })

    setMessages(prev => [...prev, userMessage])
    setInput('')

    try {
      const aiResponse = await generateText({ prompt: input })
      const aiMessage = await createMessage({
        data: {
          content: aiResponse.answer,
          isUserMessage: false,
          chatSessionId: sessionId,
          timestamp: new Date().toISOString(),
        },
      })
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      enqueueSnackbar('Failed to get AI response', { variant: 'error' })
    }

    refetchChatSessions()
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>AI Chatbot for Civic Engagement</Title>
      <Paragraph>
        Ask questions about local government processes, get personalized
        recommendations for civic engagement activities, and discover new
        opportunities based on your interests.
      </Paragraph>

      <Card style={{ marginBottom: '20px' }}>
        <List
          dataSource={messages}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  item.isUserMessage ? <UserOutlined /> : <RobotOutlined />
                }
                title={item.isUserMessage ? 'You' : 'AI Assistant'}
                description={
                  <div>
                    <div>{item.content}</div>
                    <small>
                      {dayjs(item.timestamp).format('YYYY-MM-DD HH:mm:ss')}
                    </small>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Card>

      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          onPressEnter={handleSendMessage}
          placeholder="Type your message here..."
          style={{ marginRight: '10px' }}
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </div>

      {isLoadingChatSessions && <Spin />}
    </PageLayout>
  )
}
