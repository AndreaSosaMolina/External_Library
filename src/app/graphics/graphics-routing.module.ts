import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicsComponent } from './graphics.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'covid', component: GraphicsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
