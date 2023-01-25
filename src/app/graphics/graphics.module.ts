import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule} from 'ng2-charts';
import { GraphicsComponent } from './graphics.component';
import { GraphicsRoutingModule } from './graphics-routing.module';


@NgModule({
  declarations: [
    GraphicsComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule,
   
  ]
})
export class GraphicsModule { }
