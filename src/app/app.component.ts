import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menu: MenuItem[] = [
    { ruta: '/graficas/covid', texto: 'Mostrar Graficas'  },
  ]
}
