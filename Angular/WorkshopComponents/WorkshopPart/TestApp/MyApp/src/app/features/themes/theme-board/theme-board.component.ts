import { Component } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Theme } from '../../../models';
import { ThemesService } from '../../../core/services/themes.service';
import { CommonModule } from '@angular/common';
import { ThemeItemComponent } from '../theme-item/theme-item.component';

@Component({
  selector: 'app-theme-board',
  imports: [CommonModule, ThemeItemComponent],
  templateUrl: './theme-board.component.html',
  styleUrl: './theme-board.component.css',
  standalone: true
})
export class ThemeBoardComponent {
  themes$: Observable<Theme[]>;

constructor(private themeService: ThemesService) {
    this.themes$ = this.themeService.getThemes();
  }

}
