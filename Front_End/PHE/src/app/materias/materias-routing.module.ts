import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MateriasComponent } from './materias.component';

const materiasRutas: Routes = [
  {path: 'materias', component: MateriasComponent }
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
