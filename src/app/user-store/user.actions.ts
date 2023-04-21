import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const loadUsers = createAction('[User] Load Users');

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);

export const addUser = createAction('[User] Add User');

export const addUserSuccess = createAction(
  '[User] Add User Success',
  props<{ user: User }>()
);
