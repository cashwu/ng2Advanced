import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import {Route, Routes,  RouterModule} from '@angular/router';
import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  {
    path: '',
    component : DashboardComponent
  },
  {
    path: 'dashboard',
    component : DashboardComponent
  },
  {
    path: 'cards',
    component : CardsComponent
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
