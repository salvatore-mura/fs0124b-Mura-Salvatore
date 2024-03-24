import { Component } from '@angular/core';
import { iPost } from './Models/ipost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postInEvidence: iPost | undefined;
  postRandom: iPost[] = [];
  postArr: iPost[] = [];

  ngOnInit() {
    fetch('../assets/db.json')
      .then(res => res.json())
      .then((contenutoJson: any) => {
        this.postArr = contenutoJson.posts;
        this.getRandomPosts(4);
      });
  }

  getRandomPosts(n: number) {
    for (let i = 0; i < n; i++) {
      const rand = Math.floor(Math.random() * this.postArr.length);
      const randomPost = this.postArr[rand];
      if (i === 0) {
        this.postInEvidence = randomPost;
      } else {
        this.postRandom.push(randomPost);
      }
    }
  }
}
