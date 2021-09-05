import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataUploadRoutingModule } from './data-upload-routing.module';
import { StudentDataUploadComponent } from './student-data-upload/student-data-upload.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    StudentDataUploadComponent
  ],
  imports: [
    CommonModule,
    DataUploadRoutingModule,
    HttpClientModule
  ]
})
export class DataUploadModule { }
