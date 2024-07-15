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
import { Q011 } from './q011'
import { Q012 } from './q012'
import { Q013 } from './q013'
import { Q014 } from './q014'
import { Q015 } from './q015'
import { Q016 } from './q016'
import { Q017 } from './q017'
import { Q018 } from './q018'
import { Q019 } from './q019'
import { Q020 } from './q020'
import { Q021 } from './q021'
import { Q022 } from './q022'
import { Q023 } from './q023'
import { Q024 } from './q024'
import { Q025 } from './q025'
import { Q026 } from './q026'
import { Q027 } from './q027'
import { Q028 } from './q028'
import { Q029 } from './q029'
import { Q030 } from './q030'
import { Q031 } from './q031'

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
  'Q.011': Q011,
  'Q.012': Q012,
  'Q.013': Q013,
  'Q.014': Q014,
  'Q.015': Q015,
  'Q.016': Q016,
  'Q.017': Q017,
  'Q.018': Q018,
  'Q.019': Q019,
  'Q.020': Q020,
  'Q.021': Q021,
  'Q.022': Q022,
  'Q.023': Q023,
  'Q.024': Q024,
  'Q.025': Q025,
  'Q.026': Q026,
  'Q.027': Q027,
  'Q.028': Q028,
  'Q.029': Q029,
  'Q.030': Q030,
  'Q.031': Q031,
}
