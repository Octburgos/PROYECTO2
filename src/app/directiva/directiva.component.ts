import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css'],
})
export class DirectivaComponent implements OnInit {
  mostrarse: boolean = true;
  arregloNumeros: number[] =[];
  
  arregloNombres: string[] =["isajar","gustavo","octavio"];
  numero: number;
  //creamos un objeto
  persona: any = {
    nombre: "Gustavo", 
    apellido: "Springles",
    edad: 28,
    
  }  



  
  
  constructor() {}
  
 
  ngOnInit(): void {}

  ocultarMensaje(){
    this.mostrarse = false
  }

  mostrarMensaje(){
    this.mostrarse = true
  }
// la funcion push agrega un nuevo elemento al arreglo, 
  agregarNumero(){
    this.arregloNumeros.push(this.numero);
    this.numero = undefined;
  }
}
