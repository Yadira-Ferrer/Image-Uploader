import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DragDropModule } from 'primeng/dragdrop';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
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
    MessagesModule,
    MessageModule,
    ProgressBarModule,
    TooltipModule,
  ],
})
export class PrimeNgModule {}
