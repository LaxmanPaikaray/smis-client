import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './shared/layout/blank-layout/blank-layout.component';
import { DashboardLayoutComponent } from './shared/layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  },
  {
    path: 'data-upload',
    component: DashboardLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./data-upload/data-upload.module').then(m => m.DataUploadModule) },
    ]
  },
  {
    path:'authentication',
    component:BlankLayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
