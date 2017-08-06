import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'
import { Router } from '@angular/router'
import { Observable, BehaviorSubject } from 'rxjs'
import { Passport } from 'passport'
import { Strategy as GitHubStrategy } from 'passport-github'

import { environment as env } from '../environments/environment'
import { Poll } from './polls.model'
import { User } from './users.model'

@Injectable()
export class AuthService {
  constructor(
    private http: Http,
    private router: Router
  ) { }

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false)
  private username: BehaviorSubject<string> = new BehaviorSubject(null)
  private displayName: BehaviorSubject<string> = new BehaviorSubject(null)
  private loginApi = `${env.serverApiUrl}auth/github`
  private logoutApi = `${env.serverApiUrl}api/logout`
  private getUserDataApi = `${env.serverApiUrl}api/getuserdata`
  private allPollsApi = `${env.serverApiUrl}api/getpolls`
  private myPollsApi = `${env.serverApiUrl}api/getpolls?name=${this.username}`
  private headers = new Headers({ 'Content-Type': 'application/json' })

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

  getPolls(): Observable<Poll[]> {
    return this.http.get(this.allPollsApi)
      .map(res => res.json())
  }

  getMyPolls(): Observable<Poll[]> {
    return this.http.get(this.myPollsApi)
      .map(res => res.json())
  }
}
