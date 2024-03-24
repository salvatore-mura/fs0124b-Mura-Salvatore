import { Component } from '@angular/core';
import { Auto } from '../../../models/auto';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {
  carsArr: Auto[] = [];
  fiatArr: Auto[] = [];
  ngOnInit() {
    fetch('../../../assets/db.json')
      .then(res => res.json())
      .then((contenutoJson: Auto[]) => {
        this.carsArr = contenutoJson;
        this.fiatArr = this.carsArr.filter((auto) => auto.brand === 'Fiat');
        console.log(this.fiatArr)
      })
  }

}
