import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DragDropModule } from 'primeng/dragdrop';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    DragDropModule,
    FileUploadModule,
    ProgressBarModule,
  ],
})
export class PrimeNgModule {}
