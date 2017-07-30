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
  private loggedInSubsc: Subscription
  loggedIn: boolean

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  polls: Poll[]
  numberPolls: number

  ngOnInit(): void {
    this.loggedInSubsc = this.authService.isLoggedIn().subscribe(loggedIn => this.loggedIn = loggedIn)

    this.authService.getPolls().subscribe(polls => {
      this.polls = polls
      this.numberPolls = polls.length
    })
  }

  routeNewPoll: () => void = () => {
    this.router.navigate(['/newpoll'])
  }

  routeRandomPoll: () => void = () => {
    const rand = Math.floor(Math.random() * this.numberPolls)
    this.router.navigate([`/polls/${rand}`])
  }

  ngOnDestroy() {
    this.loggedInSubsc.unsubscribe()
    
  }
}
