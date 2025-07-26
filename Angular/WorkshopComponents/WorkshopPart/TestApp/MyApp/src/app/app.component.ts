import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeBoardComponent } from "./features/themes";
import { PostBoardComponent } from "./features/posts";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeBoardComponent, PostBoardComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyApp';
}

