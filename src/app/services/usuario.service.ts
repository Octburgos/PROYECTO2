import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
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

//eliminamos usuario de la base de datos buscandolo por el id.
  eliminarUsuario(id:number){
    //El headers es una cabecera que se agrega a la consulta donde agregamos nuestro token (nuestra firma),
    //para indicarle al servidor que estamos autorizados a hacer este tipo de consultas.
    const headers = new HttpHeaders({
      Authorization: "Bearer c8905a6ccb7fb259a42800929905d42cbab2f5286e2356e571b37acdf0085650",
    });
    return this.http.delete("https://gorest.co.in/public-api/users/"+id, {headers});
  }
}
