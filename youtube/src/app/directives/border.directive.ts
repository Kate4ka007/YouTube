/* eslint-disable class-methods-use-this */
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBorder]',
})
export default class BorderDirective implements OnInit {
  @Input('appBorder') elem!: string;

  defaultColor: string = '#cccccc';

  private color: string;

  month!: number;

  SIXMONTH = 61;

  MONTH = 31;

  SEVENDAYS = 7;

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
    if (this.month < this.SEVENDAYS) {
      return '5px solid blue';
    } if (this.month < this.MONTH) {
      return '5px solid green';
    } if (this.month < this.SIXMONTH) {
      return '5px solid yellow';
    }
    return '5px solid red';
  }

  @HostBinding('style.borderRadius') get getBorderRadius() {
    return '5px';
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  @HostBinding('style.width') get getWidth() {
    return '400px';
  }

  @HostBinding('style.color') get getColor() {
    return this.color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.color = '#ffffff';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = this.defaultColor;
  }
}
