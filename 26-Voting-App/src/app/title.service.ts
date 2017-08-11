import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Injectable()
export class TitleService {
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle)
  }
}