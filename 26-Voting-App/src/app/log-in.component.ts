import { Component } from '@angular/core'

import { AuthService } from './auth.service'

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private authService: AuthService) { }
  login(): void {
    this.authService.login()
  }
}
