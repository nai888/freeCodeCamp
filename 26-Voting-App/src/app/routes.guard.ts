import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'

import { AuthService } from './auth.service'

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(): boolean {
    // can only activate this route if logged in
    if (this.authService.isLoggedIn().getValue()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
}

@Injectable()
export class LoggedOutGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(): boolean {
    // can only activate this route if logged out
    if (this.authService.isLoggedIn().getValue()) {
      this.router.navigate(['/'])
      return false
    } else {
      return true
    }
  }
}
