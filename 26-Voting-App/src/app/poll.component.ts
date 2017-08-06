import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs/Subject'
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
  pollS = new Subject<Poll>()
  none: boolean = false

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']
      this.authService.getPoll(this.id).subscribe(poll => {
        if (poll === null) {
          this.none = true
        } else {
          this.none = false
          this.pollS.next(poll)
        }
      })
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
