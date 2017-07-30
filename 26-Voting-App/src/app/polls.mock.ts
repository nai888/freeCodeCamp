import { Injectable } from '@angular/core'

import { Poll } from './polls.model'

@Injectable()
export class Polls {
  polls: Poll[] = [
    {
      id: 0,
      question: 'Are you a minor?',
      answers: [
        {
          id: 0,
          answer: 'I am younger than 18 years old',
          votes: 0
        }, {
          id: 1,
          answer: 'I am 18 years old or older',
          votes: 0
        }
      ],
      editable: false,
      owner: 'nai888'
    }, {
      id: 1,
      question: 'What is your gender?',
      answers: [
        {
          id: 0,
          answer: 'cismale',
          votes: 0
        }, {
          id: 1,
          answer: 'cisfemale',
          votes: 0
        }, {
          id: 2,
          answer: 'transmale',
          votes: 0
        }, {
          id: 3,
          answer: 'transfemale',
          votes: 0
        }, {
          id: 4,
          answer: 'intersex',
          votes: 0
        }, {
          id: 5,
          answer: 'bigender',
          votes: 0
        }
      ],
      editable: true,
      owner: 'nai888'
    }
  ]
}
