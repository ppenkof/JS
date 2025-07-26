import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Theme } from '../../../models';

@Component({
  selector: 'app-theme-item',
  imports: [],
  templateUrl: './theme-item.component.html',
  styleUrl: './theme-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ThemeItemComponent {
@Input() theme!: Theme;
}
