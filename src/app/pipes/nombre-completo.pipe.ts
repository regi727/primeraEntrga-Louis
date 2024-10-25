import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../services/usuario'; 


@Pipe({
  name: 'nombreCompleto',
})
export class NombreCompletoPipe implements PipeTransform {
  transform(value: Usuario, transform?: 'uppercase'): string {
    const vista = value.nombre + ' ' + value.apellido;
   
    if (transform === 'uppercase') {
      return `${vista}.toUpperCase()`;
    }
    return vista;
  }
}
 
