import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MateriasComponent } from './materias.component';
import { AgregarMateriaComponent } from './agregar-materia/agregar-materia.component';

const materiasRutas: Routes = [
  {path: 'materias', component: MateriasComponent },
  {path: 'agregarMateria', component: AgregarMateriaComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(materiasRutas)
  ],
  exports:[
    RouterModule
  ]
})
export class MateriasRoutingModule { }
