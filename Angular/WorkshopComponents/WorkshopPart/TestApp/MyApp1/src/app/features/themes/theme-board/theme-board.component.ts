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
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store';
import { selectPosts } from '../../../core/store/posts/post.selectors';
import { selectThemes } from '../../../core/store/themes/theme.selector';
import { loadThemes, loadThemesReset } from '../../../core/store/themes/theme.actions';
import { loadPosts, loadPostsReset } from '../../../core/store/posts/post.actions';

@Component({
  selector: 'app-theme-board',
  imports: [CommonModule, ThemeItemComponent, PostItemComponent, RouterLink],
  templateUrl: './theme-board.component.html',
  styleUrl: './theme-board.component.css',
  standalone: true
})
export class ThemeBoardComponent {
  private authService = inject(AuthService);
  readonly isLoggedIn = this.authService.isLoggedIn;

  themes$: Observable<Theme[]>;
  posts$: Observable<Post[]>;

  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.select(selectPosts);
    this.themes$ = this.store.select(selectThemes);
   
    this.store.dispatch(loadThemes());
    this.store.dispatch(loadPosts());
  }

  ngOnDestroy(): void {
    this.store.dispatch(loadThemesReset());
    this.store.dispatch(loadPostsReset());
  }
}
