import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'

@Injectable()
export class AuthService {
  _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false)
  _id: BehaviorSubject<string> = new BehaviorSubject(null)
  _username: BehaviorSubject<string> = new BehaviorSubject(null)
  _displayName: BehaviorSubject<string> = new BehaviorSubject(null)

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
