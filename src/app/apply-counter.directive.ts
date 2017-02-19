import {HostListener, HostBinding,  Directive} from '@angular/core';

@Directive({
  selector: '.pt0 [apply-counter]'
})
export class ApplyCounterDirective {

  @HostBinding("class.bg-success")
  bgClass = false;

  @HostListener('click', ["$event"])
  myClick (){
    this.bgClass = !this.bgClass;
  }

  constructor() { 
    setTimeout(() => {
      this.bgClass = true;
    }, 5000);
  }

}
