import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTamano]'
})
export class TamanoDirective {

  constructor( private elemento:ElementRef<HTMLElement>) { 
    this.cambiarFontSize();
  }

  cambiarFontSize(): void{
    this.elemento.nativeElement.style.fontSize = '20px';

  }

}
