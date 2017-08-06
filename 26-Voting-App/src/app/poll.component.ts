import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs/Subject'
import { Subscription } from 'rxjs/Subscription'

import { PollDataService } from './poll-data.service'
import { Poll } from './polls.model'

@Component({
  selector: 'poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
  constructor(
    private pollDataService: PollDataService,
    private route: ActivatedRoute
  ) { }

  id: number
  sub: Subscription
  pollS = new Subject<Poll>()
  none: boolean = false

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']
      this.pollDataService.getPoll(this.id).subscribe(poll => {
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
