import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Theme } from '../../../models';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { RouterLink } from '@angular/router';
import { SliceTitlePipe } from '../../../shared/pipes/slice-title.pipe';

@Component({
  selector: 'app-theme-item',
  imports: [CommonModule, RouterLink, SliceTitlePipe],
  templateUrl: './theme-item.component.html',
  styleUrl: './theme-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ThemeItemComponent {
  
  @Input() theme!: Theme;

  private authService = inject(AuthService);

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get currentUserId(): string | null {
    return this.authService.getCurrentUserId();
  }

  isSubscribed(themeId: string): boolean {
    // For now, return false. In a real app, you'd check against user's subscriptions
    return false;
  }

  toggleSubscribe(themeId: string): void {
    // For now, just log the action. In a real app, you'd make an API call
    console.log(`Toggling subscription for theme: ${themeId}`);
  }
}
