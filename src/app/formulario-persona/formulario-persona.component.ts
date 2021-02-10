import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonaService} from '../services/persona.service';
import { UsuarioService } from '../services/usuario.service';
@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

//variables de ng model.
   nombre: string;
   apellido: string;
   edad: number;
   telefono: number;
   arregloDatos:any[] = [];
   arregloUsuarios: any[] = [];
// variables para formulario.
  personaForm: FormGroup;
  usuarioForm: FormGroup;
 
// PASOS PARA CONSTRUIR UN FORMULARIO REACTIVOS:
//1-Crear un objeto del tipo FormGroup (en este caso personaForm)
//2-Crear una variable del tipo formBuilder dentro del contructor.
//3- Dentro del ngOnInit unimos el objeto del tipo formGroup con el formBuilder, 
//asignando cada propiedad con un valor y un validador.

// personaService es una variable que nos permite acceder al servicio.
  constructor(private fb: FormBuilder, private personaService: PersonaService, private usuarioService: UsuarioService, private _snackBar: MatSnackBar) { }

 
  // funcion que se ejecuta automaticamente (no la ejecutamos nosotros)
  // cuando se inicia el componente
  // Lista completa de validadores en --> https://angular.io/api/forms/Validators#min
  ngOnInit(): void {
    this.personaForm = this.fb.group({
    nom:["", Validators.required],
    ape:["", Validators.required],
    ed:["",[ Validators.required, Validators.min(18), Validators.max(60)]],
    tel:["", Validators.required],
    })

    this.usuarioForm = this.fb.group({
    name:["", Validators.required],
    email:["", Validators.required],
    gender:["", Validators.required,],
    status:["", Validators.required],
    })
  }

// la funcion push agrega un nuevo elemento al arreglo, 
// agregarDatos: agrega una persona al arreglo.
agregarDatos(){
  // usuario: objeto que creamos cada vez que agregamos una persona. 
  // Este objeto tiene como propiedades las variables que estan relacionadas con el ng model.
 let usuario: any = {
    nombre: this.nombre, 
    apellido: this.apellido,
    edad: this.edad,
    tel: this.telefono,
  }  
  let usuario2: any = {
    nombre: this.nombre, 
    
  
  }  
// agregamos el objeto creado al arreglo.
  this.arregloDatos.push(usuario);
  this.resetFormulario();
}

resetFormulario(){
  this.nombre = undefined;
  this.apellido = undefined;
  this.edad = undefined;
  this.telefono = undefined;
}


agregarPersona(){
  //creamos un objeto para guardar los valores 
  //del objeto formulario (personaForm)
  let persona: any = {
    nom: this.personaForm.value["nom"],
    ape: this.personaForm.value["ape"],
    ed: this.personaForm.value["ed"],
    tel: this.personaForm.value["tel"],
  }
  // agregamos el objeto creado al arreglo.
  
  this.personaService.agregarPersona(persona)
  //reset el formulario utilizando una funcion que esta implementada en el
  //objeto formulario
  this.personaForm.reset();
}

agregarUsuario(){
  //creamos un objeto para guardar los valores 
  //del objeto formulario (personaForm)
  let usuario: any = {
    name: this.usuarioForm.value["name"],
    email: this.usuarioForm.value["email"],
    gender: this.usuarioForm.value["gender"],
    status: this.usuarioForm.value["status"],
  }

this.usuarioService.agregarUsuario(usuario).subscribe( (respuesta:any) =>{

  console.log(respuesta);
if (respuesta.code == 201){
  this.mostrarMensaje("El usuario fue creado correctamente con un ID" + " " + respuesta.data.id);
} else {
  this.mostrarMensaje("No se pudo crear usuario correctamente")
}
  
});



} //fin agregar usuario
mostrarMensaje(message: string){
  this._snackBar.open(message,"", {
    duration: 5000,
  });
}// fin de mostrar mensaje.




}// fin de clase
