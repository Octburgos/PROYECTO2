import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta2',
  templateUrl: './tarjeta2.component.html',
  styleUrls: ['./tarjeta2.component.css']
})
export class Tarjeta2Component implements OnInit {
  
  @Input() nombre: string;
  @Input() apellido: string;
  @Input() edad: string;
 
  @Input() tel: string;
  constructor() { }

  ngOnInit(): void {
  }

}
