import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  // TODO: Show the content in this carousel
  isActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
