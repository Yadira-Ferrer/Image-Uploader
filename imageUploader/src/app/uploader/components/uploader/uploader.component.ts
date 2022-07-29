import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
})
export class UploaderComponent {
  @Output() sendFile: EventEmitter<File> = new EventEmitter();

  constructor() {}

  myUploader(event: any) {
    const file = event.files[0];

    this.sendFile.emit(file);
  }
}
