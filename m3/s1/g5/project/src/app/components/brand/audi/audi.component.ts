import { Component } from '@angular/core';
import { Auto } from '../../../models/auto';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  carsArr: Auto[] = [];
  audiArr: Auto[] = [];
  ngOnInit() {
    fetch('../../../assets/db.json')
      .then(res => res.json())
      .then((contenutoJson: Auto[]) => {
        this.carsArr = contenutoJson;
        this.audiArr = this.carsArr.filter((auto) => auto.brand === 'Audi');
      })
  }
}
