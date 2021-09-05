import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    DashboardLayoutComponent,
    BlankLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
