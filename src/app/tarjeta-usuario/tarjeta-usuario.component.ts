import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-tarjeta-usuario',
  templateUrl: './tarjeta-usuario.component.html',
  styleUrls: ['./tarjeta-usuario.component.css']
})
export class TarjetaUsuarioComponent implements OnInit {
  arregloUsuarios: any[] = []
  columnasAMostrar: string[] = ['id', 'name', 'gender','status', 'email' ];
  idUsuario: number;

  constructor( private usuarioService: UsuarioService, private _snackBar: MatSnackBar ) {

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
    
    //
    console.log(this.arregloUsuarios);
    })

    
  }//fin ngOnInit

  //funcion para buscar un usuario en base al id que se ingrese en el input.
  buscarUsuario(){
    //llamamos a la funcion obtenerUsuario del servicio usuario pasandole el idUsuario.
    this.usuarioService.obtenerUsuario(this.idUsuario).subscribe( (respuesta:any) => {
      this.mostrarMensaje(respuesta.data.name + " " + respuesta.data.email )
    //console.log("respuesta de buscarUsuario:", respuesta)
    });
    
    
  }//fin buscar usuario

  //funcion para eliminar un usuario en base al id que se ingrese en el input.
  eliminarUsuario(){
    this.usuarioService.eliminarUsuario(this.idUsuario).subscribe( (respuesta:any)=>{
    //console.log(respuesta);

    // preguntamos si el codigo de la respuesta el 204 (eliminacion exitosa). Caso afirmativo mostramos id usuario eliminado.
    // caso negativo mostramos error al eliminar usuario.
    if(respuesta.code == 204){
      this.mostrarMensaje("El usuario con el ID" + " " + this.idUsuario + " " +"fue eliminado");
    } else{
      this.mostrarMensaje("Error al eliminar usuario")
    }
      
    });
  }// fin eliminar usuario.

  mostrarMensaje(message: string){
    this._snackBar.open(message,"", {
      duration: 5000,
    });
  } // FIN MOSTRAR MENSAJE
   
}// fin de la clase
   