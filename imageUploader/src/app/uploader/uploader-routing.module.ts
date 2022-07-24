import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'image-uploader', component: ImageUploaderComponent },
      { path: '**', redirectTo: 'image-uploader' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploaderRoutingModule {}
