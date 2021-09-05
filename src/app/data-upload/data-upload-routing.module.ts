import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDataUploadComponent } from './student-data-upload/student-data-upload.component';

const routes: Routes = [
  {
    path:'student-data',
    component:StudentDataUploadComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataUploadRoutingModule { }
