import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard.component'
import { LoggedInComponent } from './logged-in.component'
import { LogInComponent } from './log-in.component'
import { NavComponent } from './nav.component'
import { NewPollComponent } from './new-poll.component'
import { PollComponent } from './poll.component'
import { AuthService } from './auth.service'
import { PollDataService } from './poll-data.service'
import { TitleService } from './title.service'
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
    TitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
