import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { PageLikeComponent } from './components/page-like/page-like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  // by default, components in module declarations are private to that module
  declarations: [
    AddressComponent,
    PageLikeComponent,
    HighlightDirective,
    SortPipe,
    FilterPipe
  ],
  imports: [
    CommonModule, // contains directives like *ngIf, ngClass, pipes
  ],
  // if we want to resue components, directives, pipes, we need to exports from module
  exports: [
    // subset of public component are exported here for reuse in other module
    AddressComponent,
    PageLikeComponent,
    HighlightDirective,
    SortPipe,
    FilterPipe
  ]
})
export class SharedModule { }
