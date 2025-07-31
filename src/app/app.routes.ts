import { Routes } from '@angular/router';
import { ColoniasComponent } from './colonias/colonias.component';
import { FichasComponent } from './fichas/fichas.component';
import { MantenimientoCapturasComponent } from './capturas/mantenimiento-capturas/mantenimiento-capturas.component';
import { MantenimientoServiciosComponent } from './mantenimiento-servicios/mantenimiento-servicios.component';
import { MantenimientoColoniasComponent } from './colonias/mantenimiento-colonias/mantenimiento-colonias.component';
import { FormularioColoniaComponent } from './colonias/formulario-colonia/formulario-colonia.component';

export const routes: Routes = [
    { path: 'servicios', component: MantenimientoServiciosComponent },
    { path: 'capturas', component: MantenimientoCapturasComponent },
    { path: 'colonias', component: MantenimientoColoniasComponent },
    { path: 'fichas', component: FichasComponent },
    { path: 'colonias/nueva', component: FormularioColoniaComponent },
    { path: '', redirectTo: '/colonias', pathMatch: 'full' }, // Ruta por defecto // 
  ];
