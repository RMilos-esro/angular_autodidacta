import { Routes } from '@angular/router';
import { PaginaContacto } from './pagina-contacto/pagina-contacto';
import { PaginaInicio } from './pagina-inicio/pagina-inicio';
import { Chistes } from './chistes/chistes';
export const routes: Routes = [
  { path: '', component: PaginaInicio },
  { path: 'contacto', component: PaginaContacto },
  { path: 'chistes', component: Chistes },
];
