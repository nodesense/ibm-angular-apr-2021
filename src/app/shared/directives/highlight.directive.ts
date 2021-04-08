
//attribute directive
// NO UI/template
// is hosted on a host element
// host element?

// <div appHighlight
// <p appHighlight
// div, p tags are host elements

// to listen on any event that happens on host element, we need to use hostLister

// if we need instance of directive in component like #productName="ngModel",
// we need give export name #myhighlight="appHighlight"

// highlight.directive.ts
import { Directive, ElementRef, 
         Input, Output, EventEmitter, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlight'
})
export class HighlightDirective {

  constructor(private hostElement: ElementRef, 
              private renderer: Renderer2) { }

  @Input()
  color: string = 'lightblue'

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.hostElement.nativeElement, 
                            'background',
                            this.color);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeStyle(this.hostElement.nativeElement, 
      'background');
  }

}
