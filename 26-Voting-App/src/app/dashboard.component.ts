import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'

import { AuthService } from './auth.service'
import { Poll } from './polls.model'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private loggedInSubsc: Subscription
  private allPollsSubsc: Subscription
  private myPollsSubsc: Subscription
  loggedIn: boolean
  polls: Poll[]
  numPolls: number
  myPolls: Poll[]
  numMyPolls: number

  ngOnInit(): void {
    this.loggedInSubsc = this.authService.isLoggedIn().subscribe(loggedIn => this.loggedIn = loggedIn)

    this.allPollsSubsc = this.authService.getPolls().subscribe(polls => {
      this.polls = polls
      this.numPolls = polls.length
    })

    this.authService.getMyPolls().subscribe(polls => {
      this.myPolls = polls
      this.numMyPolls = polls.length
    })
  }

  routeNewPoll(): void {
    this.router.navigate(['/newpoll'])
  }

  routeRandomPoll(): void {
    const rand = Math.floor(Math.random() * this.numPolls)
    this.router.navigate([`/polls/${rand}`])
  }

  ngOnDestroy(): void {
    this.loggedInSubsc.unsubscribe()
    this.allPollsSubsc.unsubscribe()
  }
}
