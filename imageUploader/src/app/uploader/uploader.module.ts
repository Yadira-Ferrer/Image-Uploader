import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaderRoutingModule } from './uploader-routing.module';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { UploaderComponent } from './components/uploader/uploader.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CardImageComponent } from './components/card-image/card-image.component';

@NgModule({
  declarations: [
    ImageUploaderComponent,
    UploaderComponent,
    LoaderComponent,
    CardImageComponent,
  ],
  imports: [CommonModule, UploaderRoutingModule, PrimeNgModule],
})
export class UploaderModule {}
