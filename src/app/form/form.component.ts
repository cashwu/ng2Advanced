import {FormGroup, FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {

    
  }



}
