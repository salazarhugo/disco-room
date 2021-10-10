import { Component, OnInit } from '@angular/core';
import {Room} from "../core/models/room.model";
import {ActivatedRoute} from "@angular/router";
import {TitleService} from "../services/title.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {

  constructor(
    private titleService: TitleService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const room: Room = data.room;
      this.titleService.setTitle(room.name)
    });
  }

}
