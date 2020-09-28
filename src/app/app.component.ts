import { Component } from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ej003';

  misProductos: Product[]=[
    {
      nombre:"Antonio",
      edad:30,
      direccion: 'Cll/ Medellin Nº12',
      imagen:'../assets/img/1.jpg'
    },
    {
      nombre:"Juan",
      edad:48,
      direccion: 'Cll/ Falsa Nº1',
      imagen:'../assets/img/2.jpg'
    },
    {
      nombre:"Lucia",
      edad:23,
      direccion: 'Cll/ España Nº10',
      imagen:'../assets/img/3.jpg'
      }  

  ]


}
