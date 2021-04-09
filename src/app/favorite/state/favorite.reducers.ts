// favorite.reducers.ts

import { createReducer, on } from '@ngrx/store';
import { Favorite } from '../models/favorite';
import { addFavorite, emptyFavorites, removeFavorite } from './favorite.actions';

export const initialState: Favorite[] = [];
// state means the data in the store, right now, it is list of favorite object
// the data is maintained by store/global store
const _favoriteReducer = createReducer(
  initialState, // by default, it contains empty list in favorite
  on(addFavorite, (state, action) =>  [...state, action.favorite] ),
  on(removeFavorite, (state, action) => state.filter(fav => fav.id != action.id)),
  on(emptyFavorites, (state) => [] )
);

export function favoriteReducer(state, action) {
  return _favoriteReducer(state, action);
}