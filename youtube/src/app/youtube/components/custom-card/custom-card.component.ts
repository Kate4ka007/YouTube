import { Component, Input } from '@angular/core';
import { CustomCard } from 'src/app/store/reducers/card.reducer';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() data!: CustomCard;
}
