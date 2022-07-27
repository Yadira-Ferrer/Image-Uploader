import { Component } from '@angular/core';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css'],
  providers: [MessageService],
})
export class ImageUploaderComponent {
  image: any;
  constructor(private messageService: MessageService) {}

  myUploader(event: any) {
    console.log('File Basic Upload');
    console.log(event);
  }

  showToast() {
    console.log('TOAST');

    this.messageService.add({
      key: 'msgToast',
      severity: 'info',
      summary: 'Image copied',
      detail: '...',
    });
  }
}
