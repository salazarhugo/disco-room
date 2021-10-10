import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Room} from "../core/models/room.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private afs: AngularFirestore
  ) { }

  public getRoom(id: string): Observable<Room> {
    return this.afs.collection("rooms").doc(id).snapshotChanges().pipe(map(doc => {
      return doc.payload.data() as Room
    }))
  }
}
