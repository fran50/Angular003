import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() valor: Product;
  @Output() enviarDato: EventEmitter<any>= new EventEmitter();
 bandera=true;
 banderaIcono=false;

 addFavoritos(){
   console.log('uno mas en favoritos');
   this.enviarDato.emit(this.valor.nombre);
 }

  constructor() { }

  ngOnInit(): void {
  }

}
