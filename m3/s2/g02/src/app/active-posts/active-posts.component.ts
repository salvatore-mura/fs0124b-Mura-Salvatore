import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostInterface } from 'src/interfaces/post.interface';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})


export class MyComponent {
  activePosts: PostInterface[];

  constructor(private postService: PostService) {
    this.activePosts = this.postService.activePosts;
  }
}
