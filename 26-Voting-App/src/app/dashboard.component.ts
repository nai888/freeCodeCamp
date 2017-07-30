import { Component } from '@angular/core'

import { loggedIn } from './authentication.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  loggedIn = loggedIn
}
