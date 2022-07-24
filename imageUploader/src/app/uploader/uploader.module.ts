import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaderRoutingModule } from './uploader-routing.module';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [ImageUploaderComponent],
  imports: [CommonModule, UploaderRoutingModule, PrimeNgModule],
})
export class UploaderModule {}
