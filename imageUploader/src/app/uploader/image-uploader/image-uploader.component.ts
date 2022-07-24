import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css'],
})
export class ImageUploaderComponent implements OnInit {
  image: any;
  constructor() {}

  ngOnInit(): void {}

  myUploader(event: any) {
    console.log('File Basic Upload');
    console.log(event);
  }
}
