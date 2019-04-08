import 'hammerjs';

// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppMaterialModule } from './app.material.module';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// Modules
import { RoutingModule } from './routing.module';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { PropertyBookingsComponent } from './properties/property-bookings/property-bookings.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

// Other
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    HttpModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PropertiesComponent,
    PropertyDetailComponent,
    PropertyBookingsComponent,
    HeaderComponent,
    NavtabsComponent,
    SidenavListComponent
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
