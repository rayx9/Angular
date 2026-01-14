import { Component } from '@angular/core';
import { ProductosComponent } from './componentes/productos/productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductosComponent],
  template: `
    <productos></productos>
  `,
})
export class AppComponent {}
