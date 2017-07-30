import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard.component'
import { LogInComponent } from './log-in.component'
import { NewPollComponent } from './new-poll.component'
import { ProfileComponent } from './profile.component'
import { PollComponent } from './poll.component'
import { LoggedInGuard, LoggedOutGuard } from './routes.guard'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
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
  }, {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [
      LoggedInGuard
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
