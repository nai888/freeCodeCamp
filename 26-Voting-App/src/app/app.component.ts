import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = 'freeCodeCamp Voting App'
  copyrightYear: number | string
  currentYear: number
  getCurrentYear: () => number = () => { return (new Date()).getFullYear() }

  ngOnInit(): void {
    this.currentYear = this.getCurrentYear()

    this.currentYear === 2017 ? this.copyrightYear = this.currentYear : this.copyrightYear = '2017–' + this.currentYear
  }
}
