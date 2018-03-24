import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Router } from '@angular/router'
import { Observable, BehaviorSubject } from 'rxjs'

import { AuthService } from '../auth/auth.service'
import { environment as env } from '../../environments/environment'
import { Poll } from '../models/polls.model'

@Injectable()
export class PollDataService {
  constructor(
    private authService: AuthService,
    private http: Http,
    private router: Router
  ) { }
  private pollsApi = `${env.serverApiUrl}api/polls`
  private pollApi = `${env.serverApiUrl}api/poll`

  getPolls(): Observable<number> {
    return this.http.get(this.pollsApi)
      .map(res => res.json())
  }

  getMyPolls(): Observable<Poll[]> {
    return this.http.get(`${this.pollsApi}?name=${this.authService.getUsername().getValue()}`)
      .map(res => res.json())
  }

  getPoll(id): Observable<Poll> {
    return this.http.get(`${this.pollApi}?id=${id}`)
      .map(res => res.json())
  }

  deletePoll(id): Promise<void> {
    return this.http.delete(`${this.pollApi}?id=${id}`)
      .toPromise()
      .then(deleted => {
        if (deleted) {
          this.router.navigate(['/'])
        } else {
          console.error('Could not delete poll.')
        }
      })
  }
}
