import { Component, Input, ViewChild } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css'],
})
export class CardImageComponent {
  @ViewChild(Tooltip) tooltip!: Tooltip;
  @Input() image: string = '';

  constructor() {}

  copyLink() {
    this.tooltip.activate();
  }
}
