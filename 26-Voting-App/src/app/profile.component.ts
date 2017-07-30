import { Component } from '@angular/core'

import { AuthService } from './auth.service'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private authService: AuthService) { }
  loggedIn = this.authService.isLoggedIn()
}
