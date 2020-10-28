import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { TarjetaPersonaComponent } from './tarjeta-persona/tarjeta-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaComponent,
    TarjetaPersonaComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
