import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'

import { AuthService } from './auth.service'
import { Poll } from './polls.model'

@Component({
  selector: 'poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  id: number
  sub: Subscription
  poll: Poll

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']
      this.authService.getPoll(this.id).subscribe(poll => this.poll = poll)
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
