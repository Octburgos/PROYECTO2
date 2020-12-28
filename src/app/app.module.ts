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
@NgModule({
  declarations: [
    AppComponent,
    DirectivaComponent,
    TarjetaPersonaComponent,
    Tarjeta2Component,
    FormularioPersonaComponent
  
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
