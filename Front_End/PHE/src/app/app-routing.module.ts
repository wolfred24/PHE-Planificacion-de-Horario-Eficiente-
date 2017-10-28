import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const rutas: Routes = [
  {path:'', redirectTo: '/materias', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
