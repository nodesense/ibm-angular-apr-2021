

// action means a description, not implementation
// abstraction, payload, information, needed to perform action later


// favorite.reducers.ts

import { createAction, props } from '@ngrx/store';
import { Favorite } from '../models/favorite';

// action 1, add product to favorite - info required Favorite {id, name}

export const addFavorite = createAction(
  '[Favorite] Add Favorite', // type
  props<{ favorite: Favorite }>(), // favorite
);

// action 2, remove product from favorite - info required {id}

export const removeFavorite = createAction(
    '[Favorite] Remove Favorite',
    props<{ id: number }>()
  );

// action 3, remove all products from favorite (nothing is needed)
export const emptyFavorites = createAction(
    '[Favorite] Empty Favorites'
  );
