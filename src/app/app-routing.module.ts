import { RickshawComponent } from './rickshaw/rickshaw.component';
import { RichshawComponent } from './richshaw/richshaw.component';
import { RadialComponent } from './radial/radial.component';
import { FlotComponent } from './flot/flot.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import {Route, Routes,  RouterModule} from '@angular/router';
import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  { path: '', component : DashboardComponent  },
  { path: 'dashboard', component : DashboardComponent },
  { path: 'cards/:type', component : CardsComponent },
  { path : "charts/:username",
    children : [
      { path : "flot", component : FlotComponent },
      { path : "radial", component : RadialComponent },
      { path : "rickshaw", component : RickshawComponent }
    ]
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
