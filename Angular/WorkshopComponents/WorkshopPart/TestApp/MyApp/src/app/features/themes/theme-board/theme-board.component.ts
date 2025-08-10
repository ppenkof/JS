import { Component, inject } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { Theme } from '../../../models';
import { ThemesService } from '../../../core/services/themes.service';
import { CommonModule } from '@angular/common';
import { ThemeItemComponent } from '../theme-item/theme-item.component';
import { Post } from '../../../models/post.model';
import { PostsService } from '../../../core/services/posts.service';
import { AuthService } from '../../../core/services/auth.service';
import { PostItemComponent } from "../../posts";


@Component({
  selector: 'app-theme-board',
  imports: [CommonModule, ThemeItemComponent, PostItemComponent],
  templateUrl: './theme-board.component.html',
  styleUrl: './theme-board.component.css',
  standalone: true
})
export class ThemeBoardComponent {

  private authService = inject(AuthService);
  readonly isLoggedIn = this.authService.isLoggedIn;

  themes$: Observable<Theme[]>;
  posts$: Observable<Post[]>;

constructor(
  private themeService: ThemesService,
  private postsService: PostsService) {
    
    this.themes$ = this.themeService.getThemes();
    this.posts$ = this.postsService.getPosts();
  }

}
