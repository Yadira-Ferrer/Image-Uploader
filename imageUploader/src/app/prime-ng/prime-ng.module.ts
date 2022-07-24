import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DragDropModule } from 'primeng/dragdrop';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [],
  exports: [ButtonModule, CardModule, DragDropModule, FileUploadModule],
})
export class PrimeNgModule {}
