import { Component, OnInit } from '@angular/core';

class Materias {
  nombre: String;
  seccion: number;
  horas: number;
  creditos: number;
  clave: String;
  nrc: String
}

const instanciaMaterias: Materias[] = [
  {nombre: "matematicas",seccion: 203,horas: 2,creditos: 9,clave: "520",nrc: "J432"},
  {nombre: "matematicas",seccion: 203,horas: 2,creditos: 9,clave: "520",nrc: "J432"},
  {nombre: "matematicas",seccion: 203,horas: 2,creditos: 9,clave: "520",nrc: "J432"},
  {nombre: "matematicas",seccion: 203,horas: 2,creditos: 9,clave: "520",nrc: "J432"}
]
@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
