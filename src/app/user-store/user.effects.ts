import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { delay, map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as UserActions from './user.actions';
import { UserService } from './user.service';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          tap(console.log),
          delay(3000),
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
