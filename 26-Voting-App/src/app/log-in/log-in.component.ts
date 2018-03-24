import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Voting App | Log In')
  }

  login(): void {
    this.authService.login()
  }
}
