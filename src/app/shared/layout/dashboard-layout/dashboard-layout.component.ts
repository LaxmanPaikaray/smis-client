import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    $("#outer-wrapper").toggleClass("toggled");
  }

}
