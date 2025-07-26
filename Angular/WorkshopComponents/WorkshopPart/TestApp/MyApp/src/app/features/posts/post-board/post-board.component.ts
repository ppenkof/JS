import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostsService } from '../../../core/services';
import { Post } from '../../../models';
import { PostItemComponent } from '../post-item/post-item.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-board',
  imports: [CommonModule, PostItemComponent],
  templateUrl: './post-board.component.html',
  styleUrl: './post-board.component.css',
  standalone: true
})
export class PostBoardComponent {
  posts:Post[] = [];
  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) {
    this.posts$ = this.postsService.getPosts();
  }

}
