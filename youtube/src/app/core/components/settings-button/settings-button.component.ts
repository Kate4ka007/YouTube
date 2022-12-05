import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  isShow = false;

  @Output() changed = new EventEmitter<boolean>();

  change(bool:boolean): void {
    this.changed.emit(bool);
  }
}
