import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageAComponent} from "./page-a/page-a.component";
import {PageBComponent} from "./page-b/page-b.component";

const routes: Routes = [
  {
    path: 'page-a',
    component: PageAComponent,
  },
  {
    path: 'page-b',
    component: PageBComponent,
  },
  {
    path: '',
    component: PageAComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
