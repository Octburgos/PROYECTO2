import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-tarjeta-usuario',
  templateUrl: './tarjeta-usuario.component.html',
  styleUrls: ['./tarjeta-usuario.component.css']
})
export class TarjetaUsuarioComponent implements OnInit {
  arregloUsuarios: any[] = []
  columnasAMostrar: string[] = ['id', 'name', 'gender','status', 'email' ];

  constructor( private usuarioService: UsuarioService ) {

   }


  ngOnInit(): void {

    //llamamos a la funcion obtenerUsuario del servicio y nos suscribimos a la respuesta
    this.usuarioService.obtenerUsuarios().subscribe( (respuesta:any) => {
    //  console.log(respuesta.data[4]); --> para ver por consola.
    
    //una vez que llega la respuesta, sacamos la parte que nos interesa de esta.
    //en este caso, .Data.
    //Respuesta.data contiene el arreglo de usuarios que le estamos pidiendo a la base de datos.
    //Esto lo guardamos en nuestro arregloUsuarios
    this.arregloUsuarios = respuesta.data;
    console.log(this.arregloUsuarios);
    })
  }

}
