import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
import { Location } from '@angular/common'
import { Subscription } from 'rxjs/Subscription'

import { AuthService } from './auth.service'

@Component({
  selector: 'nav-comp',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnDestroy {
  private _loggedInSubsc: Subscription
  loggedIn: boolean
  private _idSubsc: Subscription
  id: string
  private _usernameSubsc: Subscription
  username: string
  private _displayNameSubsc: Subscription
  displayName: string

  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location
  ) {
    this._loggedInSubsc = this._authService.isLoggedIn().subscribe(loggedIn => this.loggedIn = loggedIn)
    this._idSubsc = this._authService.getId().subscribe(id => this.id = id)
    this._usernameSubsc = this._authService.getUsername().subscribe(username => this.username = username)
    this._displayNameSubsc = this._authService.getDisplayName().subscribe(displayName => this.displayName = displayName)
  }

  logOut: () => void = () => {
    if (this.loggedIn) {
      this._authService.logOut()
      this._router.navigate([''])
    }
  }

  ngOnDestroy() {
    this._loggedInSubsc.unsubscribe()
    this._idSubsc.unsubscribe()
    this._usernameSubsc.unsubscribe()
    this._displayNameSubsc.unsubscribe()
  }
}
