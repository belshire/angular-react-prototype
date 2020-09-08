import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactButtonComponent } from './react-button/react-button.component';
import { AlternateReactButtonComponent } from './alternate-react-button/alternate-react-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactButtonComponent,
    AlternateReactButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
