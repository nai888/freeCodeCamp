import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'
import { Passport } from 'passport'
import { Strategy } from 'passport-github'

import User from './users.model'

@Injectable()
export class AuthService {
  private _gitHubAuth = {
    clientID: process.env.gitHubID,
    clientSecret: process.env.gitHubSecret,
    callbackURL: `${process.env.appURL}/auth/github/callback`
  }
  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false)
  private _id: BehaviorSubject<string> = new BehaviorSubject(null)
  private _username: BehaviorSubject<string> = new BehaviorSubject(null)
  private _displayName: BehaviorSubject<string> = new BehaviorSubject(null)

  isLoggedIn(): BehaviorSubject<boolean> {
    return this._loggedIn
  }

  getId(): BehaviorSubject<string> {
    return this._id
  }

  getUsername(): BehaviorSubject<string> {
    return this._username
  }

  getDisplayName(): BehaviorSubject<string> {
    return this._displayName
  }

  logIn(): void {
    this._loggedIn.next(true)
    // Update the following properties with the results from Passport
    this._id.next("0")
    this._username.next("nai888")
    this._displayName.next("Ian A. Cook")
  }

  logOut(): void {
    this._loggedIn.next(false)
    this._id.next(null)
    this._username.next(null)
    this._displayName.next(null)
  }
}
