import { 
  Component, 
  Pipe,
  OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  langs: string[] = [
    'English', 
    'French', 
    'German',
  ];
  myform: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      email: new FormControl(),
      password: new FormControl(),
      language: new FormControl()
    });
  }
}
