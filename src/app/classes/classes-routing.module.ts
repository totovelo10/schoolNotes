import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const classRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(classRoutes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
