import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {CreateRoomComponent} from "../create-room/create-room.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-my-rooms',
  templateUrl: './my-rooms.component.html',
  styleUrls: ['./my-rooms.component.sass']
})
export class MyRoomsComponent implements OnInit {

  rooms: Observable<any> | undefined

  constructor(
    public dialog: MatDialog,
    private afs: AngularFirestore,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.rooms = this.afs.collection("rooms")
      .snapshotChanges().pipe(map(docs => {
        return docs.map(a => a.payload.doc.data()) as any[]
      }))
  }

  navigateToRoom(room: any): void {
    this.router.navigate(["r/" + room.id], {state: room})
      .then(r => console.log(r));
  }

  openCreateRoomDialog(): void {
    const dialogRef = this.dialog.open(CreateRoomComponent, {
      width: '250px',
      data: { id: "", name: "" , visibility: "public"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteRoom(room: any): void {
    this.afs.collection("rooms").doc(room.id).delete()
      .then()
      .catch(err => console.log(err))
  }
}
