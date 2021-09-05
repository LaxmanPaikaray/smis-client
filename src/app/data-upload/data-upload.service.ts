import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataUploadService {

  constructor(private http:HttpClient) { }
  
  uploadStudentData(postPayload:any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}data-uploads`, postPayload).pipe(
      map(response => {
        return response;
      })
    );
  }
}
