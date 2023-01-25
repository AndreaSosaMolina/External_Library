import { Component, ViewChild, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { GraphicsService } from '../services/graphics.service';


@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styles: [
  ]
})
export class GraphicsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [ DataLabelsPlugin ];

  labels: string[] = []

  public barChartData: ChartData<'bar'> = {
    labels: this.labels,
    datasets: [
       { data: [], label:'Test positivo',
         backgroundColor: ['#FF400D'],
     }, 
       { data: [], label:'Test negativo',
        backgroundColor: ['#69C5FA'], 
     }
    ]
  };

  constructor( private graphicS: GraphicsService){}


  ngOnInit(): void { 
    this.graphicS.getStatesData()
      .subscribe(  ({arrObtenido}) => {
          
          arrObtenido.forEach((e)=> {
           this.labels.push(e.values.state);
           this.barChartData.datasets[0].data.push(e.values.positiveT);
           this.barChartData.datasets[1].data.push(e.values.negative);
          })

        this.chart?.update();
      });
  };

}

