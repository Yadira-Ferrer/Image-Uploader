import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
})
export class UploaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  myUploader(event: any) {
    console.log('File Basic Upload');
    console.log(event);
  }
}
