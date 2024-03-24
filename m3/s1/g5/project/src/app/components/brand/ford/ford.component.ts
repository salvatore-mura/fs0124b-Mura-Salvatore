import { Component } from '@angular/core';
import { Auto } from '../../../models/auto';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  carsArr: Auto[] = [];
  fordArr: Auto[] = [];
  ngOnInit() {
    fetch('../../../assets/db.json')
      .then(res => res.json())
      .then((contenutoJson: Auto[]) => {
        this.carsArr = contenutoJson;
        this.fordArr = this.carsArr.filter((auto) => auto.brand === 'Ford');
      })
  }
}
