import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent implements OnInit {

  people: any[] = [
    {
      "name": "Douglas Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod Mueller",
      "country": 'USA'
    },
    {
      "name": "Day Meyers",
      "country": 'HK'
    },
    {
      "name": "Aquirre Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook Tyson",
      "country": 'USA'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  getColor(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }
}
