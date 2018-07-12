import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDir1]'
})
export class MyDir1Directive {

  constructor(private ele1:ElementRef) 
  {
    //ele1.nativeElement.style.background='yellow'
  }
  

  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('red');
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('black');
  }

  setcolor(color:string)
  {
    this.ele1.nativeElement.style.background=color;
  }

}
