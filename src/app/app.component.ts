import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ej003';
  longFavoritos: number = 0;
  favoritos: string[] = [];
  misProductos: Product[] = [
    {
      id: 27,
      nombre: "Antonio",
      edad: 30,
      direccion: 'Cll/ Medellin Nº12',
      imagen: '../assets/img/1.jpg'
    },
    {
      id: 7,
      nombre: "Juan",
      edad: 48,
      direccion: 'Cll/ Falsa Nº1',
      imagen: '../assets/img/2.jpg'
    },
    {
      id: 5,
      nombre: "Lucia",
      edad: 23,
      direccion: 'Cll/ España Nº10',
      imagen: '../assets/img/3.jpg'
    }

  ];

  reciboDato(nombre: string) {
    this.favoritos.push(nombre);
    this.longFavoritos = this.favoritos.length;
  }
  borrarDato(id: number, i: number) {
    this.misProductos.splice(i, 1);
    // borrar en la base de datos
  }

}
