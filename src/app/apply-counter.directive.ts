import {ElementRef, Renderer,  Input,   HostListener,    HostBinding,     Directive} from '@angular/core';

@Directive({
  selector: '.pt0 [apply-counter]'
})
export class ApplyCounterDirective {

  @Input()
  @HostBinding("class.bg-success")
  bgClass = false;

  @HostListener('click', ["$event"])
  myClick (){
    this.bgClass = !this.bgClass;
  }

  constructor(private el : ElementRef, private renderer : Renderer) { 
    // setTimeout(() => {
    //   this.bgClass = true;
    // }, 5000);
  }

  ngOnInit(){
    (this.el.nativeElement as HTMLDivElement).innerHTML = "123";

    this.renderer.setElementClass(this.el.nativeElement, "bg-danger", true);
  }

}
