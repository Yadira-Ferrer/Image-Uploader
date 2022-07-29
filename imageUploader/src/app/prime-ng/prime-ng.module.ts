import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DragDropModule } from 'primeng/dragdrop';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    DragDropModule,
    FileUploadModule,
    InputTextModule,
    InputSwitchModule,
    ProgressBarModule,
    TooltipModule,
  ],
})
export class PrimeNgModule {}
