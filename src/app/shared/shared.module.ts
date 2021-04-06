import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { PageLikeComponent } from './components/page-like/page-like.component';


@NgModule({
  // by default, components in module declarations are private to that module
  declarations: [
    AddressComponent,
    PageLikeComponent
  ],
  imports: [
    CommonModule, // contains directives like *ngIf, ngClass, pipes
  ],
  // if we want to resue components, directives, pipes, we need to exports from module
  exports: [
    // subset of public component are exported here for reuse in other module
    AddressComponent,
    PageLikeComponent
  ]
})
export class SharedModule { }
