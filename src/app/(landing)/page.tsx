'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  TeamOutlined,
  BulbOutlined,
  CalendarOutlined,
  RocketOutlined,
  MessageOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Event Recommendations`,
      description: `Our intelligent chatbot suggests relevant local events tailored to your interests and schedule.`,
      icon: <BulbOutlined />,
    },
    {
      heading: `Comprehensive Local Data`,
      description: `Access a wealth of information about your local government, all in one place.`,
      icon: <EditOutlined />,
    },
    {
      heading: `Community Connection`,
      description: `Engage with fellow citizens and build a stronger, more connected community.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Event Calendar`,
      description: `Never miss an important local event with our integrated calendar feature.`,
      icon: <CalendarOutlined />,
    },
    {
      heading: `Simplified Civic Participation`,
      description: `Navigate complex local governance structures with ease and confidence.`,
      icon: <RocketOutlined />,
    },
    {
      heading: `Direct Communication`,
      description: `Reach out to local officials and departments effortlessly through our platform.`,
      icon: <MessageOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Community Activist`,
      content: `This app has revolutionized how I engage with my local government. I'm now aware of and participating in events I never knew existed before!`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `Small Business Owner`,
      content: `As a busy entrepreneur, this app helps me stay connected to my community without sacrificing precious time. It's a game-changer!`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `College Student`,
      content: `I've always wanted to be more involved in local politics, but didn't know where to start. This app made it so easy and accessible!`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Thompson`,
      designation: `Retired Teacher`,
      content: `At my age, it's not always easy to keep up with local events. This app has helped me stay engaged and active in my community.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Patel`,
      designation: `Working Parent`,
      content: `Balancing work and family left little time for civic engagement. This app changed that, allowing me to participate on my own schedule.`,
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      name: `James Wilson`,
      designation: `Local Council Member`,
      content: `From the government side, I've seen a noticeable increase in citizen participation since this app launched. It's truly bridging the gap.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Citizen`,
      description: `Perfect for individuals looking to get more involved in their community.`,
      monthly: 4.99,
      yearly: 49.99,
      features: [
        `AI event recommendations`,
        `Local government data access`,
        `Community forums`,
      ],
    },
    {
      title: `Activist`,
      description: `Ideal for those who want to take their civic engagement to the next level.`,
      monthly: 9.99,
      yearly: 99.99,
      features: [
        `All Citizen features`,
        `Priority event notifications`,
        `Direct messaging with officials`,
        `Advanced analytics`,
      ],
      highlight: true,
    },
    {
      title: `Community Leader`,
      description: `For organizations and highly active community members.`,
      monthly: 19.99,
      yearly: 199.99,
      features: [
        `All Activist features`,
        `Custom event creation`,
        `Collaboration tools`,
        `API access`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does the AI-powered chatbot work?`,
      answer: `Our AI chatbot analyzes your interests, schedule, and past interactions to recommend relevant local events and opportunities for civic engagement.`,
    },
    {
      question: `Is my personal information secure?`,
      answer: `Absolutely. We use state-of-the-art encryption and adhere to strict privacy policies to ensure your data is always protected.`,
    },
    {
      question: `Can I use the app if I'm not tech-savvy?`,
      answer: `Yes! Our app is designed to be user-friendly and intuitive, with a clean interface that's easy for everyone to navigate.`,
    },
    {
      question: `How often is the local government data updated?`,
      answer: `We update our data in real-time, ensuring you always have access to the most current information about your local government and community events.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Sign Up`,
      description: `Create your account and tell us about your interests and availability.`,
    },
    {
      heading: `Explore`,
      description: `Browse local government data, upcoming events, and community resources.`,
    },
    {
      heading: `Engage`,
      description: `Participate in events, discussions, and decision-making processes.`,
    },
    {
      heading: `Impact`,
      description: `Make a real difference in your community through informed, active participation.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😕`,
      title: `Feeling disconnected from local government`,
    },
    {
      emoji: `🤯`,
      title: `Overwhelmed by complex civic processes`,
    },
    {
      emoji: `⏰`,
      title: `Lack of time to stay informed and involved`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Empower Your Voice in Local Democracy`}
        subtitle={`Connect, engage, and shape your community with our AI-powered civic engagement app.`}
        buttonText={`Get Started`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/efxChN-civix-9KgT`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from active citizens`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Featured on`} />
      <LandingPainPoints
        title={`Bridging the 83% Trust Gap in Local Governance`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Journey to Civic Empowerment`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Unlock Your Civic Potential`}
        subtitle={`Discover how our app transforms your ability to engage with and impact your local community.`}
        features={features}
      />
      <LandingTestimonials
        title={`Real Stories of Civic Transformation`}
        subtitle={`See how citizens like you are making a difference in their communities.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Community's Future`}
        subtitle={`Choose the plan that fits your level of civic engagement.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Your Questions, Answered`}
        subtitle={`We're here to help you navigate your civic journey.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Amplify Your Voice?`}
        subtitle={`Join thousands of engaged citizens making a real difference in their communities.`}
        buttonText={`Start Your Civic Journey`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
