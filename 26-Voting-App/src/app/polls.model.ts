'use strict'

export type Answer = {
  id: number,
  answer: string,
  votes: number
}

export type Poll = {
  id: number,
  question: string,
  answers: Answer[],
  owner: string
}
