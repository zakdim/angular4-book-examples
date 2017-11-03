import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {

  people: any[] = [
    {
      "name": "Douglas Pace"
    },
    {
      "name": "Mcleod Mueller"
    },
    {
      "name": "Day Meyers"
    },
    {
      "name": "Aquirre Ellis"
    },
    {
      "name": "Cook Tyson"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
