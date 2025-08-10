import { ChangeDetectionStrategy, Component, Input, WritableSignal, signal } from '@angular/core';
import { Theme } from '../../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-item',
  imports: [CommonModule],
  templateUrl: './theme-item.component.html',
  styleUrl: './theme-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ThemeItemComponent {
  
  @Input() theme!: Theme;
}
