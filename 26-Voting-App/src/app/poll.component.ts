import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subscription } from 'rxjs/Subscription'
import { Title } from '@angular/platform-browser'

import { AuthService } from './auth.service'
import { PollDataService } from './poll-data.service'
import { AnswerType, Poll } from './polls.model'
import { FormModel } from './form.model'

@Component({
  selector: 'poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
  constructor(
    private authService: AuthService,
    private pollDataService: PollDataService,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  id: number
  private pollSub: Subscription
  private pollBS: BehaviorSubject<Poll>
  none: boolean = false
  private userSub: Subscription
  user: string
  loggedin: boolean
  owned: boolean
  model: FormModel
  confirmDelete: boolean = false

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

          this.titleService.setTitle('Voting App | ' + this.pollBS.getValue().question)

          this.userSub = this.authService.getUsername().subscribe(user => {
            this.user = user
            this.loggedin = user ? true : false
            this.owned = user === this.pollBS.getValue().owner
          })

          this.model = new FormModel(this.pollBS.getValue().id, this.pollBS.getValue().type)
        }
      })
    })
  }

  // TODO: delete this when done testing
  get diagnostic() { return JSON.stringify(this.model) }

  addOption(): void {

  }

  deleteOption(): void {

  }

  vote(): void {

  }

  delete(): void {
    if (this.owned && this.confirmDelete) {
      this.pollDataService.deletePoll(this.id)
    }
  }

  ngOnDestroy(): void {
    this.pollSub.unsubscribe()
    this.userSub.unsubscribe()
  }
}
