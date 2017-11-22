import {
  Directive,
  ElementRef,
  Renderer,
  HostListener,
  HostBinding } from '@angular/core';

@Directive({
  selector: '[ccCardHoover]'
})
export class CardHooverDirective {
  @HostBinding('class.border-primary') private ishoovering: boolean;

  constructor(private el: ElementRef, private renderer: Renderer) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  // @HostListener('mouseover') onHoover() {
  //   window.alert("hoover");
  // }
  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'block');
    this.ishoovering = true;
  }
  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishoovering = false;
  }
}
