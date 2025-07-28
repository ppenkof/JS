import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../../../models/post.model'; // Adjust the import path as necessary
//import { PostBoardComponent } from '../post-board/post-board.component';

@Component({
  selector: 'app-post-item',
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent {
@Input() post!: Post;
}
