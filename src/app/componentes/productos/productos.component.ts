import { Component } from '@angular/core';
import { ProductosService, Producto } from '../../servicios/productos.service';
import { ProductoItemComponent } from '../producto-item/producto-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'productos',
  standalone: true,
  imports: [FormsModule, ProductoItemComponent],
  templateUrl: './productos.component.html',
})
export class ProductosComponent {

  nuevoNombre = '';
  nuevoPrecio: number | null = null;
  nuevaDescripcion = '';

  constructor(private productosService: ProductosService) {}

  get productos() {
    return this.productosService.productos;
  }

  agregar() {
    if (!this.nuevoNombre.trim() || this.nuevoPrecio === null) return;

    const nuevo: Producto = {
      nombre: this.nuevoNombre,
      precio: this.nuevoPrecio,
      descripcion: this.nuevaDescripcion
    };

    this.productosService.addProducto(nuevo);

    this.nuevoNombre = '';
    this.nuevoPrecio = null;
    this.nuevaDescripcion = '';
  }

  eliminar(nombre: string) {
    this.productosService.removeProducto(nombre);
  }
}


