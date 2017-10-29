import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriasRoutingModule } from './materias-routing.module';
import { FormsModule } from '@angular/forms';

import { MateriasComponent } from './materias.component';
import { AgregarMateriaComponent } from './agregar-materia/agregar-materia.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MateriasRoutingModule
  ],
  declarations: [
    MateriasComponent,
    AgregarMateriaComponent
  ]
})
export class MateriasModule { }
