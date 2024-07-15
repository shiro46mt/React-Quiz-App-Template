import { ReactNode } from 'react'
import { ReactComponent as BulbIcon } from '../assets/icons/bulb.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  // {
  //   title: 'General Knowledge',
  //   icon: <BulbIcon />,
  // },
  {
    title: 'Q.001',
    icon: <BulbIcon />,
  },
  {
    title: 'Q.002',
    icon: <BulbIcon />,
  },
  {
    title: 'Q.003',
    icon: <BulbIcon />,
  },
  {
    title: 'Q.004',
    icon: <BulbIcon />,
  },
  {
    title: 'Q.005',
    icon: <BulbIcon />,
  },
  {
    title: 'Q.006',
    icon: <BulbIcon />,
  },
  {
    title: 'Q.007',
    icon: <BulbIcon />,
  },
  {
    title: 'Q.008',
    icon: <BulbIcon />,
  },
  {
    title: 'Q.009',
    icon: <BulbIcon />,
  },
  {
    title: 'Q.010',
    icon: <BulbIcon />,
  },
]
