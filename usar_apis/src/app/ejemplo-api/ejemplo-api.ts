import { Component } from '@angular/core';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-ejemplo-api',
  imports: [],
  templateUrl: './ejemplo-api.html',
  styleUrl: './ejemplo-api.css',
})
export class EjemploApi {
    datos = httpResource<any>(() => 'https://api.ejemplo.com/datos');
    // datos.value() --> el valor que recibe
    // datos.isLoading() --> mientras la peticion esta en curso true
    // datos.error() --> muestra el error si ha ocurrido alguno
    // datos.reload() --> vuelve a realizar la peticion.
}
