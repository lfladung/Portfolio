import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import  { LandingPageComponent } from './landing-page/landing-page.component';
import  { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  {path: 'landing-page', component: LandingPageComponent},
  {path: '**', redirectTo: 'not-found'},
  {path: 'not-found', component: NotFoundComponent}

]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
