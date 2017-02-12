import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import {PreloadAllModules, Route,  Routes,   RouterModule} from '@angular/router';
import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  { path: '', component : DashboardComponent  },
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
