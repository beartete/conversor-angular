import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvComponent } from './conv/conv.component'; // adicionei

@NgModule({
  declarations: [
    AppComponent,
    ConvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // adicionei
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
