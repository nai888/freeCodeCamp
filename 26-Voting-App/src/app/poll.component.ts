import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subscription } from 'rxjs/Subscription'

import { AuthService } from './auth.service'
import { PollDataService } from './poll-data.service'
import { AnswerType, Poll } from './polls.model'

@Component({
  selector: 'poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
  constructor(
    private authService: AuthService,
    private pollDataService: PollDataService,
    private route: ActivatedRoute
  ) { }

  id: number
  private pollSub: Subscription
  private pollBS: BehaviorSubject<Poll>
  none: boolean = false
  private userSub: Subscription
  user: string
  owned: boolean
  pollForm: FormGroup

  ngOnInit(): void {
    this.pollSub = this.route.params.subscribe(params => {
      this.id = +params['id']

      this.pollDataService.getPoll(this.id).subscribe(poll => {
        if (poll === null) {
          this.none = true
        } else {
          this.none = false
          if (this.pollBS) {
            this.pollBS.next(poll)
          } else {
            this.pollBS = new BehaviorSubject<Poll>(poll)
          }

          this.userSub = this.authService.getUsername().subscribe(user => {
            this.user = user
            this.owned = user === this.pollBS.getValue().owner
          })
        }
      })
    })
  }

  vote(): void {

  }

  confirmDelete: boolean = false

  delete(): void {
    if (this.owned) {
      this.pollDataService.deletePoll(this.id)
    }
  }

  ngOnDestroy(): void {
    this.pollSub.unsubscribe()
    this.userSub.unsubscribe()
  }
}
