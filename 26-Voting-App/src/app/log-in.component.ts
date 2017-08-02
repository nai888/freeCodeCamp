import { Component } from '@angular/core'

import { environment as env } from '../environments/environment'
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
