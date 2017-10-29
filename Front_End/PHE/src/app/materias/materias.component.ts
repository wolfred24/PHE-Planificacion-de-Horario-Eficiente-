import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

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
  {nombre: "fisica",seccion: 202,horas: 4,creditos: 11,clave: "520",nrc: "z432"},
]


@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  materias = instanciaMaterias;
  materiaSeleccionada: Materias;

  onSelect(materia: Materias){
    this.materiaSeleccionada=materia;
  }
  
  agregarMateria(){
    this.router.navigate(['../agregarMateria'],{ relativeTo: this.route });
  }

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
