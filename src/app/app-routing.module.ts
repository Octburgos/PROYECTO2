import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';
import { FormularioPersonaComponent } from './formulario-persona/formulario-persona.component';
import { TarjetaPersonaComponent } from './tarjeta-persona/tarjeta-persona.component';
// routes es un arreglo que almacena objetos de ruteo. estos objetos 
// en general se componen de dos propiedades: "path" es la ruta (cualquier nombre) y "component" es
//el componente al cual apunta esa ruta.
const routes: Routes = [
  {
    //ruta raiz (la primera que se abre)
    path:"",
    component: FormularioPersonaComponent 
  },
  {
  path: 'formulario-persona',
  component: FormularioPersonaComponent 
  },
  {
   path:"directiva",
   component: DirectivaComponent
  },
  {
    path: "tarjeta-persona",
    component: TarjetaPersonaComponent
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
