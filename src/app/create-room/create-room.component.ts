import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AngularFirestore} from "@angular/fire/firestore";
import {Room, Visibility} from "../core/models/room.model";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.sass']
})
export class CreateRoomComponent {
  visibilities: Visibility[] = [
    {value: 'public', viewValue: 'Public'},
    {value: 'link', viewValue: 'Link only'},
    {value: 'password', viewValue: 'Password protected'}
  ];

  constructor(
    public dialogRef: MatDialogRef<CreateRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public room: Room,
    private afs: AngularFirestore,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  createRoom() {
    this.room.id = this.afs.createId()
    this.afs.collection("rooms").doc(this.room.id).set(this.room)
      .then()
      .catch(err => console.log(err))
  }
}
