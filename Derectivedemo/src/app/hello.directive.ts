import { Directive } from '@angular/core';
import { ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor(private _eobj:ElementRef) { }



  //Logic
  @HostListener('mouseover') onMouseEnter() 
  {
    this._eobj.nativeElement.style.background = "blue";
  }

  @HostListener('mouseleave') onMouseLeave() 
  {
     this._eobj.nativeElement.style.background = "red";
   }

   @HostListener('mouseenter') onMouseHover()
   {
      this._eobj.nativeElement.style.background = "green";
   }

}