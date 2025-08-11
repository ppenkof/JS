import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { ErrorNotification } from './shared/components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  
            FooterComponent, 
            HeaderComponent,
            ErrorNotification],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyApp';
}

