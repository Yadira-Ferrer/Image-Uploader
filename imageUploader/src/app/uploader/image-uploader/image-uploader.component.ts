import { Component } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css'],
})
export class ImageUploaderComponent {
  imageURL = 'assets/imgs/desk.jpg';
  showUploader = true;
  showLoading = false;
  showImage = false;

  constructor() {}

  uploadFile(file: any) {
    const reader = new FileReader();
    let imgb64: any;

    this.showUploader = false;
    this.showLoading = true;

    reader.readAsDataURL(file);
    reader.onload = () => {
      imgb64 = reader.result;
    };

    setInterval(() => {
      this.showLoading = false;
      this.showImage = true;
      this.imageURL = file.objectURL;
    }, 1500);
  }
}
