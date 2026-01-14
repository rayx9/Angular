export interface Producto {
  nombre: string;
  precio: number;
  descripcion: string;
}


import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductosService {

  productos = signal<Producto[]>([]);

  addProducto(producto: Producto) {
    this.productos.update(lista => [...lista, producto]);
  }

  removeProducto(nombre: string) {
    this.productos.update(lista => lista.filter(p => p.nombre !== nombre));
  }
}

