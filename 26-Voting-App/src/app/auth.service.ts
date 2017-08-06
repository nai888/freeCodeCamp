import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Router } from '@angular/router'
import { Observable, BehaviorSubject } from 'rxjs'

import { environment as env } from '../environments/environment'
import { User } from './users.model'

@Injectable()
export class AuthService {
  constructor(
    private http: Http,
    private router: Router
  ) { }

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(true)
  private username: BehaviorSubject<string> = new BehaviorSubject('nai888')
  private displayName: BehaviorSubject<string> = new BehaviorSubject('Ian')

  private loginApi = `${env.serverApiUrl}auth/github`
  private logoutApi = `${env.serverApiUrl}api/logout`

  isLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedIn
  }

  getUsername(): BehaviorSubject<string> {
    return this.username
  }

  getDisplayName(): BehaviorSubject<string> {
    return this.displayName
  }

  login(): void {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=' + env.gitHubAuth.id
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
    this.router.navigate(['/'])
  }
}
