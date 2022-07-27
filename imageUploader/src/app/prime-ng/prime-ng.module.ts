import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DragDropModule } from 'primeng/dragdrop';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    DragDropModule,
    FileUploadModule,
    InputTextModule,
    ProgressBarModule,
    ToastModule,
  ],
})
export class PrimeNgModule {}
