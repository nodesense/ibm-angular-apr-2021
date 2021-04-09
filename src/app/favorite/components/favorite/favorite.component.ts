import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Favorite } from '../../models/favorite';
import { emptyFavorites, removeFavorite } from '../../state/favorite.actions';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favorites$: Observable<Favorite[]>;

  constructor(private store: Store<{ favorite: Favorite[] }>) {
     this.favorites$ = this.store.select('favorite')
   }
  
  ngOnInit(): void {
  }

  remove(id: number){
    const action = removeFavorite({id: id})
    console.log("Action is ", action)
    this.store.dispatch(action)
  }

  empty() {
    const action = emptyFavorites();
    console.log("Action is ", action)
    this.store.dispatch(action)
  }

}
