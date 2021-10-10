import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyRoomsComponent} from "./my-rooms/my-rooms.component";
import {RoomComponent} from "./room/room.component";
import {RoomResolver} from "./room.resolver";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {
    path: '',
    component: MyRoomsComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'r/:id',
    component: RoomComponent,
    resolve: {room: RoomResolver},
    //loadChildren: () => import('../room/room.module').then(m => m.RoomModule)
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
