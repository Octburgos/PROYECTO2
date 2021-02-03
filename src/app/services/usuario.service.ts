import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient  ) { 
    //Esta funcion manda una consulta a la base de datos para obtener los usuarios.
    //Nos suscribimos a la respuesta y cuando llega la respuesta, la mostramos por consola.
    //Console.log = escribimos info en la consola del navegador.
   // this.http.get("https://gorest.co.in/public-api/users").subscribe( (respuesta) => {
    //  console.log(respuesta);
   // } )
  }
  
  // Devuelve una consulta a la base de datos 
  //donde se le pide todos los usuarios
  obtenerUsuarios(){
    return this.http.get("https://gorest.co.in/public-api/users");
  }
  
// obtenemos el detalle de un usuario pasandole el id.
  obtenerUsuario(id:number){
    return this.http.get("https://gorest.co.in/public-api/users/"+id)
  }
}
