import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-persona',
  templateUrl: './tarjeta-persona.component.html',
  styleUrls: ['./tarjeta-persona.component.css']
})
export class TarjetaPersonaComponent implements OnInit {

  @Input() nombre: string;
  @Input() apellido: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
