import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitoloComponent } from './titolo/titolo.component';
import { SottotitoloComponent } from './sottotitolo/sottotitolo.component';
import { ParagrafoComponent } from './paragrafo/paragrafo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TitoloComponent,
    SottotitoloComponent,
    ParagrafoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
