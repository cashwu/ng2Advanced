import {Validators, FormGroup,  FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name : ["cash", Validators.required]
    });
  }

  ngOnInit() {
    this.form.addControl("email", this.fb.control("cash@cashwu.com", Validators.required) );
  }

  getFieldInvalid(fieldName){
    return this.form.contains[fieldName].invalid;
  }

}
