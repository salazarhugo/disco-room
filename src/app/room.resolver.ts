import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {RoomService} from "./services/room.service";
import {Room} from "./core/models/room.model";
import {mergeMap, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RoomResolver implements Resolve<Room> {

  constructor(
    private router: Router,
    private service: RoomService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Room> | Observable<never> {
    const id = route.paramMap.get('id')!
    console.log(id)
    return this.service.getRoom(id).pipe(
      take(1),
      mergeMap(room => {
        if (room) {
          return of(room);
        } else { // id not found
          this.router.navigate(['/']);
          return EMPTY;
        }
      })
    );
  }
}
