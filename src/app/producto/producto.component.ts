import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() valor: Product;
  
 bandera=true;
 banderaIcono=false;

  constructor() { }

  ngOnInit(): void {
  }

}
