import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GifsComponent } from './gifs/gifs.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
// import {  } from '@angular/platform-browser-dynamic';
const routes :Routes = [
  { path: "", component: GifsComponent },
  { path: "gifs" , component: GifsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GifsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule { }
