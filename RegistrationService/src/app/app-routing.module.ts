import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SerachDeleteComponent } from './serch-delete/serch-delete.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
   {path:"register",component:RegistrationComponent},
   {path:"findAll",component:SerachDeleteComponent},
   {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }