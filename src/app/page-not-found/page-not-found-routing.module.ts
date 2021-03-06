import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const pageNotFoundRoutes: Routes = [
{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pageNotFoundRoutes)
  ],
  exports: [ RouterModule ]
})
export class PageNotFoundRoutingModule { }
