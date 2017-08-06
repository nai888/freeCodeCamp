import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable, BehaviorSubject } from 'rxjs'

import { AuthService } from './auth.service'
import { environment as env } from '../environments/environment'
import { Poll } from './polls.model'

@Injectable()
export class PollDataService {
  constructor(
    private authService: AuthService,
    private http: Http
  ) { }
  private pollsApi = `${env.serverApiUrl}api/getpolls`
  private pollApi = `${env.serverApiUrl}api/getpoll`

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
}
