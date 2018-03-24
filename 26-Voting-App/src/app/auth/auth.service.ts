import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Router } from '@angular/router'
import { Observable, BehaviorSubject } from 'rxjs'

import { environment as env } from '../../environments/environment'
import { User } from '../models/users.model'

@Injectable()
export class AuthService {
  constructor(
    private http: Http,
    private router: Router
  ) { }

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(true) // Change this to false
  private username: BehaviorSubject<string> = new BehaviorSubject('nai888') // Change this to null
  private displayName: BehaviorSubject<string> = new BehaviorSubject('Ian') // Change this to null

  private loginApi: string = `${env.serverApiUrl}auth/github`
  private logoutApi: string = `${env.serverApiUrl}api/logout`

  private redir: string

  isLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedIn
  }

  getUsername(): BehaviorSubject<string> {
    return this.username
  }

  getDisplayName(): BehaviorSubject<string> {
    return this.displayName
  }

  setRedirect(redir: string): void {
    this.redir = redir
  }

  login(): void {
    window.location.href = `${this.loginApi}?url=${this.redir}`
  }
  
  setUserData(username: string, displayName: string): void {
    if (username && displayName) {
      this.loggedIn.next(true)
      this.username.next(username)
      this.displayName.next(displayName)
    }
  }

  logOut(): void {
    this.loggedIn.next(false)
    this.username.next(null)
    this.displayName.next(null)
    this.http.get(this.logoutApi)
  }
}
