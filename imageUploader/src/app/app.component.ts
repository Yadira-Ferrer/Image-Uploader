import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'imageUploader';
  icon = 'pi pi-moon';
  darkTheme = false;

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: boolean) {
    if (theme) {
      this.icon = 'pi pi-sun';
      this.themeService.switchTheme('lara-dark-blue');
    } else {
      this.icon = 'pi pi-moon';
      this.themeService.switchTheme('lara-light-blue');
    }
    this.darkTheme = theme;
  }
}
