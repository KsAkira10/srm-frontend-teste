import { Component, OnInit, Input } from '@angular/core';
import { CardConfig } from '../../models/card-config.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() config: CardConfig;

  constructor() {
    this.config = {};
  }

  ngOnInit() {
  }

}
