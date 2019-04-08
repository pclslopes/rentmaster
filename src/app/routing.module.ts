// routing.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { PropertyBookingsComponent } from './properties/property-bookings/property-bookings.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: 'property-bookings', component: PropertyBookingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }