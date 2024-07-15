// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const Q009: Topic = {
  topic: 'TOEIC Part 5',
  level: 'Beginner',
  totalQuestions: 10,
  totalScore: 10,
  totalTime: 100,
  questions: [
    {
      question: '------ tickets for concerts by new artists are still available at the box office.',
      choices: ['Add', 'Additional', 'Addition', 'Additionally'],
      type: 'MCQs',
      correctAnswers: ['Additional'],
      score: 1,
    },
    {
      question: 'By the time Mr. Chang retires next year, he ------ for Delvan Corporation as a mechanical engineer for 15 years.',
      choices: ['has worked', 'had been working', 'will have worked', 'worked'],
      type: 'MCQs',
      correctAnswers: ['worked'],
      score: 1,
    },
    {
      question: '------ the human resources director, it seems to take more than three days to look over all the applications.',
      choices: ['Instead of', 'According to', 'In addition to', 'Prior to'],
      type: 'MCQs',
      correctAnswers: ['to'],
      score: 1,
    },
    {
      question: 'The mayor thanked his supporters for their ------ comments at yesterday’s press conference.',
      choices: ['encourage', 'encouraged', 'encourages', 'encouraging'],
      type: 'MCQs',
      correctAnswers: ['encouraging'],
      score: 1,
    },
    {
      question: '------ an annual event, the Fuji Live Aid Festival is now held every two years.',
      choices: ['Originating', 'Originated', 'Original', 'Originally'],
      type: 'MCQs',
      correctAnswers: ['Originally'],
      score: 1,
    },
    {
      question: 'Ms. Bhat joined Campion Consulting after earning a master’s ------ in business administration in the UK.',
      choices: ['degree', 'pension', 'commission', 'subject'],
      type: 'MCQs',
      correctAnswers: ['degree'],
      score: 1,
    },
    {
      question: 'If you have forgotten your password, enter ------ email address here to send it to us.',
      choices: ['you', 'yourself', 'yours', 'your'],
      type: 'MCQs',
      correctAnswers: ['your'],
      score: 1,
    },
    {
      question: 'The factory’s labor management manual clearly states that minimum safety standards must be met, ------ much it costs.',
      choices: ['very', 'however', 'moreover', 'even'],
      type: 'MCQs',
      correctAnswers: ['however'],
      score: 1,
    },
    {
      question: '------ Ms. Darville nor Mr. Nichols has the registered dietitian license required for the position.',
      choices: ['Either', 'Both', 'Neither', 'Not only'],
      type: 'MCQs',
      correctAnswers: ['Neither'],
      score: 1,
    },
    {
      question: 'Mr. Davies has already worked at our plant for 15 years and is ------ the most skilled welders.',
      choices: ['within', 'during', 'among', 'from'],
      type: 'MCQs',
      correctAnswers: ['among'],
      score: 1,
    },
  ],
}