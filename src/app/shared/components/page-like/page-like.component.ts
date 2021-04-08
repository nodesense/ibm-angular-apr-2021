import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-like',
  templateUrl: './page-like.component.html',
  styleUrls: ['./page-like.component.scss']
})
export class PageLikeComponent implements OnInit {
  // Two way binding
  // any changes in view, to be updated in component model data
  // if any changes model data component to be updated in view
  // [] - property binding, model to view
  // () - event binding, view to model
  // [()] - two way binding, both property binding + event binding

  @Input()
  likes: number = 0;

  // for two way binidng [()], 
  // the output event name SHOULD BE inputPropertyName + "Change"
  @Output()
  likesChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  up() {
    // emitted data is accessible via $event in html
    this.likesChange.emit(this.likes + 1);
  }

  down() {
    this.likesChange.emit(this.likes - 1);
  }


  reset() {
    console.log('reset is called')
    this.likesChange.emit(0);
  }

  get rating() {
    return this.likes % 6 + ' star'
  }

}
