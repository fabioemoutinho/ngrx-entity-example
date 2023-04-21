import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUserSuccess, loadUsers } from './user-store/user.actions';
import { User } from './user-store/user.model';
import { selectAllUsers, selectLoading } from './user-store/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly loading$: Observable<boolean> = this.store.select(selectLoading);
  readonly users$: Observable<User[]> = this.store.select(selectAllUsers);
  newUser: string = '';

  constructor(private store: Store) {
    this.store.dispatch(loadUsers());
  }

  onSubmit(): void {
    const user = { id: crypto.randomUUID(), name: this.newUser };
    console.log('user: ', user);
    this.store.dispatch(addUserSuccess({ user }));
  }
}
