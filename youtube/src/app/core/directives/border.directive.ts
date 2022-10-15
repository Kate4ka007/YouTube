/* eslint-disable class-methods-use-this */
import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBorder]',
})
export class BorderDirective implements OnInit {
  @Input('appBorder') elem!: string;

  defaultColor: string = '#cccccc';

  private color: string;

  month!: number;

  SIX_MONTH = 182;

  MONTH = 30;

  SEVEN_DAYS = 7;

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.color = this.defaultColor;
  }

  ngOnInit(): void {
    const date1 = new Date(this.elem);
    const date2 = new Date();
    const diff = Math.abs(date1.getTime() - date2.getTime());
    this.month = Math.ceil(diff / (1000 * 3600 * 24));
  }

  @HostBinding('style.borderBottom') get getBorder() {
    if (this.month < this.SEVEN_DAYS) {
      return '5px solid blue';
    } if (this.month < this.MONTH) {
      return '5px solid green';
    } if (this.month < this.SIX_MONTH) {
      return '5px solid yellow';
    }
    return '5px solid red';
  }

  @HostBinding('style.color') get getColor() {
    return this.color;
  }
}
