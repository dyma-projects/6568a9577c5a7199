import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostListener('window:keydown', ['$event']) keyboardPress(
    $event: KeyboardEvent
  ) {
    if ($event.code === 'ArrowUp') {
      this.el.nativeElement.style.color = 'red';
    } else if ($event.code === 'ArrowLeft') {
      this.el.nativeElement.style.color = 'green';
    } else if ($event.code === 'ArrowDown') {
      this.el.nativeElement.style.color = 'blue';
    } else if ($event.code === 'ArrowRight') {
      this.el.nativeElement.style.color = 'purple';
    }
  }

  constructor(private el: ElementRef) {}
}
