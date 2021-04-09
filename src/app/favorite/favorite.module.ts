// favorite.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'favorites',
    component: FavoriteComponent
  }
]

@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FavoriteModule { }
