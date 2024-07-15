// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const Q007: Topic = {
  topic: 'TOEIC Part 5',
  level: 'Beginner',
  totalQuestions: 10,
  totalScore: 10,
  totalTime: 100,
  questions: [
    {
      question: 'Ms. Ramos asked her former supervisor, Mr. Taylor, for a ------ letter in order to change jobs.',
      choices: ['recommended', 'recommend', 'recommendation', 'recommending'],
      type: 'MCQs',
      correctAnswers: ['recommendation'],
      score: 1,
    },
    {
      question: 'Refreshments, including sweets and beverages, ------ at Hansen’s retirement party next Friday.',
      choices: ['have served', 'served', 'will be serving', 'will be served'],
      type: 'MCQs',
      correctAnswers: ['served'],
      score: 1,
    },
    {
      question: 'Thanks to Ms. Johnson’s ------ donation, the City of Monterey was able to renovate the civic center last year.',
      choices: ['durable', 'adjacent', 'fragile', 'generous'],
      type: 'MCQs',
      correctAnswers: ['generous'],
      score: 1,
    },
    {
      question: '------ some people focus on career advancement, others place more emphasis on enjoying their leisure time.',
      choices: ['Since', 'While', 'Moreover', 'Despite'],
      type: 'MCQs',
      correctAnswers: ['While'],
      score: 1,
    },
    {
      question: 'A proposal to relocate the civic library to the city center was ------ approved by the city council.',
      choices: ['unanimously', 'relatively', 'considerably', 'affordably'],
      type: 'MCQs',
      correctAnswers: ['unanimously'],
      score: 1,
    },
    {
      question: 'Sophia Art Gallery, located in the Queens district, is easily ------ by public transportation.',
      choices: ['accessibility', 'access', 'accessibly', 'accessible'],
      type: 'MCQs',
      correctAnswers: ['accessible'],
      score: 1,
    },
    {
      question: 'Heavy rains last night hit the northwestern part of that town, ------ the river to flood.',
      choices: ['were causing', 'had caused', 'causing', 'are caused'],
      type: 'MCQs',
      correctAnswers: ['causing'],
      score: 1,
    },
    {
      question: 'Any questions regarding ------ leave should be directed to Mr. Dembo in the human resources department.',
      choices: ['defective', 'spacious', 'paid', 'prominent'],
      type: 'MCQs',
      correctAnswers: ['paid'],
      score: 1,
    },
    {
      question: '------ part------time employee is required to enter working hours into the attendance system every day.　',
      choices: ['All', 'A lot of', 'Most', 'Each'],
      type: 'MCQs',
      correctAnswers: ['Each'],
      score: 1,
    },
    {
      question: 'As a result of streamlining its distribution channels, Amanda International Foods has ------ the big players in the food industry.',
      choices: ['signed up for', 'carried out', 'filled out', 'caught up with'],
      type: 'MCQs',
      correctAnswers: ['with'],
      score: 1,
    },
  ],
}