import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  homeLikes = 30000;
  
  counter = 0;
  canHighlight = false;

  handle: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    // this.handle = setInterval( () => {
    //   this.counter++;
    //   console.log("Timer running on home page ", this.counter)
    // }, 5000);

  }

  increment() {
    console.trace()
    this.counter = this.counter + 1
  }

  incrementBy(n: number) {
    this.counter += n
  }


  btnClick(e: Event) {
    e.stopPropagation(); // stop bubbling up the event
    console.log('button click', e)
  }

  divClick(e: Event) {
    console.log('div click', e)
  }

  onMouseEnter(e:Event) {
    console.log('on mouse enter', e)
    this.canHighlight = true;
  }

  onMouseLeave(e:Event) {
    console.log('on mouse leave', e)
    this.canHighlight = false;
  }

  ngOnDestroy() {
    console.log("Home component destroy")
    // stop the timer
    clearInterval(this.handle);
  }

}
