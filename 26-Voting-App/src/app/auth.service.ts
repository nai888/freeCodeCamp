import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'
import { Observable, BehaviorSubject } from 'rxjs'
import { Passport } from 'passport'
import { Strategy as GitHubStrategy } from 'passport-github'

import { environment as env } from '../environments/environment'
import { Polls } from './polls.mock'
import { Poll } from './polls.model'

@Injectable()
export class AuthService {
  constructor(
    private pollsList: Polls,
    private http: Http
  ) { }

  private apiUrl = `${env.serverApiUrl}api/getpolls`
  private headers = new Headers({ 'Content-Type': 'application/json' })

  private gitHubAuth = {
    clientID: env.gitHubAuth.id,
    clientSecret: env.gitHubAuth.secret,
    callbackURL: `${env.gitHubAuth.callbackUrl}/auth/github/callback`
  }
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(true)
  private id: BehaviorSubject<string> = new BehaviorSubject(null)
  private username: BehaviorSubject<string> = new BehaviorSubject(null)
  private displayName: BehaviorSubject<string> = new BehaviorSubject(null)

  isLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedIn
  }

  getId(): BehaviorSubject<string> {
    return this.id
  }

  getUsername(): BehaviorSubject<string> {
    return this.username
  }

  getDisplayName(): BehaviorSubject<string> {
    return this.displayName
  }

  logIn(): void {
    this.loggedIn.next(true)
    // Update the following properties with the results from Passport
    this.id.next("0")
    this.username.next("nai888")
    this.displayName.next("Ian A. Cook")
  }

  logOut(): void {
    this.loggedIn.next(false)
    this.id.next(null)
    this.username.next(null)
    this.displayName.next(null)
  }

  getPolls(): Observable<Poll[]> {
    return this.http.get(this.apiUrl)
      .map(response => response.json())
  }
}
