import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../models/post.model'; // Adjust the import path as necessary
import { CommonModule } from '@angular/common'; // Import CommonModule if you need to use Angular directives like ngIf, ngFor, etc.
import { TimeAgoPipe } from '../../../shared/pipes';

@Component({
  selector: 'app-post-item',
  imports: [TimeAgoPipe, CommonModule],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent {
@Input() post!: Post;
@Output() postChangedEvent = new EventEmitter<Post>();
}
