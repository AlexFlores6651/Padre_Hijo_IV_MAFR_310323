import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Votaciones!';
  votacion = '';

  c1: number = 0;
  c2: number = 0;
  c3: number = 0;
  c4: number = 0;
  totalvotos: number = 0;

  votos = [
    {title: 'Candidato Alex Flores'},
    {title: 'Candidato Luis Ramirez'},
    {title: 'Candidato Enrique Nieto'},
    {title: 'Candidato Goku SuperSayajin'}
  ];

  addVoto(response: string){
    this.votacion = "Usted Eligio: "+response;

    switch(response.trim()){
      case "Candidato Alex Flores": this.c1++; this.totalvotos++; break;
      case "Candidato Luis Ramirez": this.c2++; this.totalvotos++; break;
      case "Candidato Enrique Nieto": this.c3++; this.totalvotos++; break;
      case "Candidato Goku SuperSayajin": this.c4++; this.totalvotos++; break;
    }
  }

  finalizarVotaciones() {
    alert(`La cantidad de personas que votaron es: ${this.totalvotos}`);
  }


}