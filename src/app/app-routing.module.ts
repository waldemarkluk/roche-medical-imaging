import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnnotationsComponent } from './components/annotations/annotations.component';


const routes: Routes = [
  {
	path: '',
	component: AnnotationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
