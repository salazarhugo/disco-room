import { Component, OnInit } from '@angular/core';
import {YoutubeService} from "../services/youtube.service";
import {Observable} from "rxjs";
import {TitleService} from "../services/title.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  videos: Observable<any> | undefined
  query = ""
  link = ""

  constructor(
    private youtube: YoutubeService,
    private title: TitleService,
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Search")
    this.videos = this.youtube.search("surfing")
    this.videos.subscribe(res=> console.log(res))
  }

  search(): void
  {
    console.log(this.query)
    this.videos = this.youtube.search(this.query)
  }


}
