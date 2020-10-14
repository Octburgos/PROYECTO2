import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css'],
})
export class DirectivaComponent implements OnInit {
  mostrarse: boolean = true;
  arregloNumeros: number[] =[1,2,3,4,5];
  constructor() {}

 
  ngOnInit(): void {}

  ocultarMensaje(){
    this.mostrarse = false
  }

  mostrarMensaje(){
    this.mostrarse = true
  }
}
