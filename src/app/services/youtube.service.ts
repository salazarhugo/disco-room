import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  apiKey : string = 'AIzaSyBN-oY2Tpo3fw3pyATPKbHT9X8V9CItp-8';

  constructor(public http: HttpClient) { }

  search(query: string): Observable<Object> {
    let url = 'https://youtube.googleapis.com/youtube/v3/search?key=' + this.apiKey +
      '&part=snippet&maxResults=25&q=' + query
    return this.http.get(url)
      .pipe(map((res: any) => {
        return res.items;
      }))
  }
}
