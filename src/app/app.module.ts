import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { TarjetaPersonaComponent } from './tarjeta-persona/tarjeta-persona.component';
import { Tarjeta2Component } from './tarjeta2/tarjeta2.component';
import { FormularioPersonaComponent } from './formulario-persona/formulario-persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { HttpClientModule } from '@angular/common/http';
import { TarjetaUsuarioComponent } from './tarjeta-usuario/tarjeta-usuario.component';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaComponent,
    TarjetaPersonaComponent,
    Tarjeta2Component,
    FormularioPersonaComponent,
    NuevoComponenteComponent,
    TarjetaUsuarioComponent
  
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatButtonModule, MatCardModule,MatToolbarModule, AppRoutingModule, 
    HttpClientModule, MatTableModule, MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
