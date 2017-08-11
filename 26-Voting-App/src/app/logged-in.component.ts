import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'

import { AuthService } from './auth.service'

@Component({
  selector: 'logged-in',
  template: '<p>Logged in. Redirecting&hellip;</p>'
})
export class LoggedInComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  username: string
  displayName: string
  psub: Subscription
  qsub: Subscription

  ngOnInit(): void {
    let redir: string
    this.psub = this.route.params.subscribe(params => {
      this.username = params['login']
      this.displayName = params['name']
    })
    this.qsub = this.route.queryParams.subscribe(queries => {
      redir = queries['redir'] !== undefined ? queries['redir'] : '/'
    })
    this.authService.setUserData(this.username, this.displayName)
    this.router.navigate([redir])
  }

  ngOnDestroy(): void {
    this.psub.unsubscribe()
  }
}
