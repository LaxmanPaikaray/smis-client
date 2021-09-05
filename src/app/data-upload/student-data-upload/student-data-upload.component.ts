import { Component, OnInit } from '@angular/core';
import { DataUploadService } from '../data-upload.service';


@Component({
  selector: 'app-student-data-upload',
  templateUrl: './student-data-upload.component.html',
  styleUrls: ['./student-data-upload.component.css']
})
export class StudentDataUploadComponent implements OnInit {

  constructor(
    private du:DataUploadService
  ) { }

  ngOnInit(): void {
    // this.uploadStudentData();
  }
  // uploadStudentData(){
  //   this.duservice.uploadStudentData({}).subscribe(res => {
  //     console.log(res);
  //   });
  // }

}
