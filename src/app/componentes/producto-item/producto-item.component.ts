import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../servicios/productos.service';

@Component({
  selector: 'producto-item',
  standalone: true,
  templateUrl: './producto-item.component.html',
})
export class ProductoItemComponent {
  @Input() producto!: Producto;
  @Output() eliminar = new EventEmitter<string>();
}
