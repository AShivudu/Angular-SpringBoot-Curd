import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SerachDeleteComponent } from './serch-delete/serch-delete.component';
import { UserRegistrationService } from './user-registration.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SerchComponent } from './serch/serch.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SerachDeleteComponent,
    HomeComponent,
    SerchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
