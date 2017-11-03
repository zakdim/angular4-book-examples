import {
  Component, OnInit, AfterContentInit, Input, ContentChildren, QueryList
} from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterContentInit {

  @Input('delay') delay: number = 500;

  @ContentChildren(CarouselItemComponent) carouselItemsList: QueryList<CarouselItemComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // TODO: mabe use the setInterval function to call a function every x millis
    let carouselItems: CarouselItemComponent[] = this.carouselItemsList.toArray();
    let count: number = 0;
    let max = carouselItems.length;
    console.log(carouselItems, count, max);
    setInterval(() => {
      let i = count % max;
      carouselItems.forEach((item) => item.isActive = false);
      carouselItems[i].isActive = true;
      count += 1;
    }, this.delay);
  }
}
