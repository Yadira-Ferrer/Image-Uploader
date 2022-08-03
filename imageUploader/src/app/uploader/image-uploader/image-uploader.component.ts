import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

interface Theme {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css'],
})
export class ImageUploaderComponent {
  currentTheme: Theme = { name: 'lara-light-blue', icon: 'pi pi-moon' };
  image = 'assets/imgs/desk.jpg';
  showUploader = true;
  showLoading = false;

  constructor(private themeService: ThemeService) {}

  uploadFile(file: any) {
    const reader = new FileReader();
    let imgb64: any;

    this.showUploader = false;
    this.showLoading = true;

    reader.readAsDataURL(file);
    reader.onload = () => {
      imgb64 = reader.result;
    };

    setTimeout(() => {
      this.showLoading = false;
      this.image = imgb64;
    }, 1500);
  }

  changeTheme() {
    const { name } = this.currentTheme;
    this.currentTheme =
      name === 'lara-light-blue'
        ? { name: 'lara-dark-blue', icon: 'pi pi-sun' }
        : { name: 'lara-light-blue', icon: 'pi pi-moon' };
    this.themeService.switchTheme(this.currentTheme.name);
  }

  backToUploader() {
    this.showLoading = false;
    this.showUploader = true;
    this.image = 'assets/imgs/desk.jpg';
  }
}
