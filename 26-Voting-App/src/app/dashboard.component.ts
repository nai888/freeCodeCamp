import { Component, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'

import { AuthService } from './auth.service'
import { Polls } from './polls.mock'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  private _loggedInSubsc: Subscription
  loggedIn: boolean

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _pollsList: Polls
  ) {
    this._loggedInSubsc = this._authService.isLoggedIn().subscribe(loggedIn => this.loggedIn = loggedIn)
  }

  polls = this._pollsList.polls
  numberPolls = this.polls.length

  routeNewPoll: () => void = () => {
    this._router.navigate(['/newpoll'])
  }

  routeRandomPoll: () => void = () => {
    const rand = Math.floor(Math.random() * this.numberPolls)
    this._router.navigate([`/polls/${rand}`])
  }

  ngOnDestroy() {
    this._loggedInSubsc.unsubscribe()
  }
}
