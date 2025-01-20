import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front.component';
import { DownlodAppComponent } from '../downlod-app/downlod-app.component';

const routes: Routes = [
  { path: '',
     component: FrontComponent 
  },
  {
    path:'downloadApp',
    component:DownlodAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule {


 }
