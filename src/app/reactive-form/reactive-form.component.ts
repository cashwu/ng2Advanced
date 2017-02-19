import { NoCashValidator } from './../shared/no-cash-validator';
import {AbstractControl, FormArray,  Validators,   FormGroup,   FormBuilder} from '@angular/forms';
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
      "name": ["cash", Validators.required],
      "group1" : this.fb.array([
        this.fb.control("Cash01", [Validators.required]),
        this.fb.control("Cash02", [Validators.required]),
        this.fb.control("Cash03", [Validators.required])
      ])
    });
  }

  ngOnInit() {
    this.form.addControl("email", this.fb.control("cash@cashwu.com", Validators.required));

    let group1: FormArray = <FormArray>this.form.controls['group1'];
    group1.insert(group1.length, this.fb.control('Cash04', NoCashValidator));
  }

  getFieldInvalid(fieldName, prefix = "") {
      console.log(fieldName, "fieldName");
      console.log(prefix, "prefix");
      return this.form.get(prefix+fieldName).invalid;
  }
}
