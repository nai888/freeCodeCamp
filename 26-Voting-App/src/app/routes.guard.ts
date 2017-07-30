import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'

import { AuthService } from './auth.service'

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private _authService: AuthService) { }
  canActivate(): boolean {
    // can only activate this route if logged in
    return this._authService.isLoggedIn().getValue()
  }
}

@Injectable()
export class LoggedOutGuard implements CanActivate {
  constructor(private _authService: AuthService) { }
  canActivate(): boolean {
    // can only activate this route if logged out
    return !this._authService.isLoggedIn().getValue()
  }
}
