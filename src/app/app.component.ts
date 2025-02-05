import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fundamentosds03';

  // propiedades
  nombre = 'Leonardo';
  email = 'jesusmt.ti22@utsjr.edu.mx';
  aniosServicio = 2;
  activo = false;
  alumnos = [24, 25, 26];
  numero = 4;
  contador = 0;
  desactivarBoton = true;

  productos = [
    {
      id: 1,
      descripcion: 'Gansito Marinela',
      precio: 15.5,
    },
    {
      id: 2,
      descripcion: 'Ruffles de Queso',
      precio: 18.75,
    },
    {
      id: 3,
      descripcion: 'Marucha',
      precio: 20.0,
    },
  ];

  estaActivo() {
    if (this.activo) {
      return 'Empleado activo';
    } else {
      return 'Empleado inactivo';
    }
  }

  sumarAlumnos() {
    let suma = 0;
    for (let i = 0; i < this.alumnos.length; i++) {
      suma += this.alumnos[i];
    }
    return suma;
  }

  incrementarContador() {
    this.contador++;
  }

  decrementaContador() {
    this.contador--;
  }

  cambiarValor() {
    this.desactivarBoton = !this.desactivarBoton;
  }
}
