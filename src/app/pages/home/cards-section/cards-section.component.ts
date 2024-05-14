import { Component, Input } from '@angular/core';
import { CARD } from 'src/app/core/db/card.db';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.scss']
})
export class CardsSectionComponent {
  i: any[] = CARD ;
}
