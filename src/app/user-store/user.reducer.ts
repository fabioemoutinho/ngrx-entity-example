import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from './user.model';

export const userFeatureKey = 'user';

export interface UserState extends EntityState<User> {
  loading: boolean;
}

export function sortByName(a: User, b: User): number {
  return a.name.localeCompare(b.name);
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  sortComparer: sortByName,
});

export const initialState: UserState = userAdapter.getInitialState({
  loading: false,
});

export const userFeature = createFeature({
  name: userFeatureKey,
  reducer: createReducer(
    initialState,
    on(UserActions.loadUsers, (state) => ({
      ...state,
      loading: true,
    })),
    on(UserActions.loadUsersSuccess, (state, { users }) =>
      userAdapter.setAll(users, { ...state, loading: false })
    ),
    on(UserActions.addUserSuccess, (state, { user }) =>
      userAdapter.addOne(user, state)
    )
  ),
});

const { selectAll, selectEntities, selectIds, selectTotal } =
  userAdapter.getSelectors();
export const selectAllUsers = selectAll;
export const selectUserEntities = selectEntities;
export const selectUserIds = selectIds;
export const selectUserTotal = selectTotal;

export const { name, reducer, selectUserState } = userFeature;
