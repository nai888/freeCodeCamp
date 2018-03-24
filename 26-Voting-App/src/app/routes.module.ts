import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { LoggedInComponent } from './logged-in/logged-in.component'
import { LogInComponent } from './log-in/log-in.component'
import { NewPollComponent } from './new-poll/new-poll.component'
import { PollComponent } from './poll/poll.component'
import { LoggedInGuard, LoggedOutGuard } from './routes.guard'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }, {
    path: 'loggedin/:login/:name',
    component: LoggedInComponent
  }, {
    path: 'login',
    component: LogInComponent,
    canActivate: [
      LoggedOutGuard
    ]
  }, {
    path: 'newpoll',
    component: NewPollComponent,
    canActivate: [
      LoggedInGuard
    ]
  }, {
    path: 'polls/:id',
    component: PollComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
