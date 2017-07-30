import { Injectable } from '@angular/core'

import { Poll } from './polls.model'

@Injectable()
export class Polls {
  polls: Poll[] = [
    {
      id: 0,
      question: 'How old are you?',
      answers: [
        {
          id: 0,
          answer: '<18',
          votes: 0
        }, {
          id: 1,
          answer: '18-24',
          votes: 0
        }, {
          id: 2,
          answer: '25-34',
          votes: 0
        }, {
          id: 3,
          answer: '>35',
          votes: 0
        }
      ],
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
      owner: 'nai888'
    }
  ]
}
