import {
  Directive,
  ElementRef,
  Renderer } from '@angular/core';

@Directive({
  selector: '[ccCardHoover]'
})
export class CardHooverDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    // el.nativeElement.style.backgroundColor = "gray";
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

}
