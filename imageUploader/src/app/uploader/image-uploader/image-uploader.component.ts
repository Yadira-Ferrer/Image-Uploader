import { Component } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
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
  image = '';
  showUploader = true;
  showLoading = false;

  constructor(
    private themeService: ThemeService,
    private imageService: ImageService
  ) {}

  async uploadFile(file: any) {
    const reader = new FileReader();
    let imgb64: any;
    let ext = file.name.split('.')[1];

    this.showUploader = false;
    this.showLoading = true;

    reader.readAsDataURL(file);
    reader.onload = () => {
      imgb64 = reader.result;
    };

    //await this.upload(ext, imgb64);
    //this.showLoading = false;
    setTimeout(async () => {
      await this.upload(ext, imgb64);
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
    this.image = '';
  }

  upload(ext: string, image: string) {
    this.imageService.uploadImage(ext, image).subscribe((resp) => {
      //console.log(resp);
      if (resp.ok) {
        this.image = resp.url!;
        this.showLoading = false;
      }
    });
  }
}
