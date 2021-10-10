import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateRoomComponent} from "./create-room/create-room.component";
import {AuthComponent} from "./auth/auth.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'disco-room';

  constructor(
    public dialog: MatDialog,
    public router: Router,
  ) {
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(AuthComponent, {
      panelClass: 'lars-login-dialog'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
  }

}
