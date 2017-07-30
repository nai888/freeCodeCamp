'use strict'

export type Answer = {
  id: number,
  text: string,
  votes: number
}

export type Poll = {
  name: string,
  question: string,
  answers: Array<Answer>
}
