import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaderRoutingModule } from './uploader-routing.module';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UploaderComponent } from './components/uploader/uploader.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [ImageUploaderComponent, UploaderComponent, LoaderComponent],
  imports: [CommonModule, UploaderRoutingModule, PrimeNgModule],
})
export class UploaderModule {}
