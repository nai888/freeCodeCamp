export type AnswerType = "checkbox" | "radio"

type Answer = {
  id: number,
  answer: string,
  votes: number
}

export type Poll = {
  id: number,
  question: string,
  type: AnswerType,
  answers: Answer[],
  editable: boolean,
  owner: string
}
