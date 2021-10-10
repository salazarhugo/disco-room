import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private _title = new BehaviorSubject<string>("Rooms")
  title$ = this._title.asObservable()

  constructor() {
  }

  setTitle(title: string) {
    this._title.next(title)
  }
}
