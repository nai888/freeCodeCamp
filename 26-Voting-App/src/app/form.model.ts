import { AnswerType, Poll } from './polls.model'

type Selection = AnswerType | number | number[] | undefined | undefined[]

export class FormModel {
  constructor(
    public pollid: number,
    public selection: Selection
  ) {
    if (this.selection === 'checkbox') {
      this.selection = []
    } else if (this.selection === 'radio') {
      this.selection = undefined
    }
  }
}
