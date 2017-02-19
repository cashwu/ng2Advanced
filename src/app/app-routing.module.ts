import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormComponent } from './form/form.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import {PreloadAllModules, Route,  Routes,   RouterModule} from '@angular/router';
import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  { path: 'form', component : FormComponent },
  { path: 'reactiveform', component : ReactiveFormComponent }, 
  { path: 'dashboard', component : DashboardComponent },
  { path: 'cards/:type', component : CardsComponent },
  { path : "charts/:username", loadChildren : "./charts/charts.module#ChartsModule"},
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy : PreloadAllModules
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
