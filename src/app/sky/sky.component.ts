import {NgModel} from '@angular/forms';
import {ContentChild, ElementRef,  Input,   Component,   OnInit,   ViewChild,   NgModule} from '@angular/core';

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

  @Input()
  titleImg : string;

  @ContentChild("btn")
  btn : ElementRef

  constructor() { 
    this.name = "sky"
  }

  ngOnInit() {
  }

  getCounter(){
    if(this.btn){
      console.log(this.btn.nativeElement.innerText);
    }
  }

}
