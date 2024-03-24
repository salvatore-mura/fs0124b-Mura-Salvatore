import { Component } from '@angular/core';
import { Auto } from '../../models/auto';

@Component({
  selector: 'app-in-evidenza',
  templateUrl: './in-evidenza.component.html',
  styleUrl: './in-evidenza.component.scss'
})
export class InEvidenzaComponent {
  carsArr: Auto[] = [];
  randomCars: Auto[] = [];
  ngOnInit() {
    fetch('../../../assets/db.json')
      .then(res => res.json())
      .then((contenutoJson: Auto[]) => {
        this.carsArr = contenutoJson;
this.getRandomCars()
      });
  }
  getRandomCars() {
    for (let i = 0; i < 2; i++) {
      let rand = Math.floor(Math.random() * this.carsArr.length)
      this.randomCars.push(this.carsArr[rand]);
    }
  }
}
