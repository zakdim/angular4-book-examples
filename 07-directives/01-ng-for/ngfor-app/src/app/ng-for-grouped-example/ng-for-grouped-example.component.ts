import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for-grouped-example',
  templateUrl: './ng-for-grouped-example.component.html',
  styleUrls: ['./ng-for-grouped-example.component.css']
})
export class NgForGroupedExampleComponent implements OnInit {

  peopleByCountry: any[] = [
    {
      'country': 'UK',
      'people': [
        {
          "name": "Douglas Pace"
        },
        {
          "name": "Mcleod Mueller"
        }
      ]
    },
    {
      'country': 'US',
      'people': [
        {
          "name": "Day Meyers"
        },
        {
          "name": "Aquirre Ellis"
        },
        {
          "name": "Cook Tyson"
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
