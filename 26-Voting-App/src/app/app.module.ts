import { BrowserModule, Title } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoggedInComponent } from './logged-in/logged-in.component'
import { LogInComponent } from './log-in/log-in.component'
import { NavComponent } from './nav/nav.component'
import { NewPollComponent } from './new-poll/new-poll.component'
import { PollComponent } from './poll/poll.component'
import { AuthService } from './auth/auth.service'
import { PollDataService } from './poll-data/poll-data.service'
import { LoggedInGuard, LoggedOutGuard } from './routes.guard'
import { RoutesModule } from './routes.module'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoggedInComponent,
    LogInComponent,
    NavComponent,
    NewPollComponent,
    PollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [
    AuthService,
    PollDataService,
    LoggedInGuard,
    LoggedOutGuard,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
