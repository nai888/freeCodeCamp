import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'

import { AuthService } from './auth.service'

@Component({
  selector: 'nav-comp',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  private loggedInSubsc: Subscription
  loggedIn: boolean
  private usernameSubsc: Subscription
  username: string
  private displayNameSubsc: Subscription
  displayName: string

  ngOnInit(): void {
    this.loggedInSubsc = this.authService.isLoggedIn().subscribe(loggedIn => this.loggedIn = loggedIn)
    this.usernameSubsc = this.authService.getUsername().subscribe(username => this.username = username)
    this.displayNameSubsc = this.authService.getDisplayName().subscribe(displayName => this.displayName = displayName)
  }

  logOut: () => void = () => {
    if (this.loggedIn) {
      this.authService.logOut()
    }
  }

  ngOnDestroy(): void {
    this.loggedInSubsc.unsubscribe()
    this.usernameSubsc.unsubscribe()
    this.displayNameSubsc.unsubscribe()
  }
}
