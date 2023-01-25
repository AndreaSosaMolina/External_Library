import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'graficas',
    loadChildren: () => import('./graphics/graphics.module').then(m => m.GraphicsModule)
  },
  {
    path: '**',
    redirectTo: 'graficas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
