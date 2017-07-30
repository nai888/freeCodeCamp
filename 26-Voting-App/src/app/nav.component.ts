import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Location } from '@angular/common'

import { loggedIn } from './authentication.service'

@Component({
  selector: 'nav-comp',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }
  loggedIn = loggedIn
  name = "Ian A. Cook"
}
