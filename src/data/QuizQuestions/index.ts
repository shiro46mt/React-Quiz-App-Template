import { generalKnowledge } from './generalKnowledge'
import { Q001 } from './q001'
import { Q002 } from './q002'
import { Q003 } from './q003'
import { Q004 } from './q004'
import { Q005 } from './q005'
import { Q006 } from './q006'
import { Q007 } from './q007'
import { Q008 } from './q008'
import { Q009 } from './q009'
import { Q010 } from './q010'

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

type Choice = string
type CorrectAnswers = string[]

export type Question = {
  question: string
  choices: Choice[]
  type: 'MCQs' | 'MAQs' | 'boolean'
  correctAnswers: CorrectAnswers
  score: number
  code?: string
  image?: string
}

export type Topic = {
  topic: string
  level: string
  totalQuestions: number
  totalScore: number
  totalTime: number
  questions: Question[]
}

export const quiz: Record<string, Topic> = {
  'General Knowledge': generalKnowledge,
  'Q.001': Q001,
  'Q.002': Q002,
  'Q.003': Q003,
  'Q.004': Q004,
  'Q.005': Q005,
  'Q.006': Q006,
  'Q.007': Q007,
  'Q.008': Q008,
  'Q.009': Q009,
  'Q.010': Q010,
}
