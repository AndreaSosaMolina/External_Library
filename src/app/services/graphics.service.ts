import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor( private http: HttpClient) { }

  api_Url: string = 'https://api.covidtracking.com/v1/states'

  getData(){
    return this.http.get(`${this.api_Url}/current.json`)
  };


  getStatesData(){
    return this.getData()
      .pipe(
        map( (data) => {
          const labels = Object.values( data);
        
          const arrObtenido = labels.map(function(s: any){
              let values = {state: s.state, positiveT: s.positive, negative: s.negative}
              return {values}
          })
          return {arrObtenido}
        })
      )
  };
}
