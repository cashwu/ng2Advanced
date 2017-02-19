import {NgModel} from '@angular/forms';
import { Input, Component, OnInit, ViewChild, NgModule } from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

  @ViewChild("input")
  input : NgModel;

  @Input()
  name : string;

  constructor() { 
    this.name = "sky"
  }

  ngOnInit() {
  }

}
