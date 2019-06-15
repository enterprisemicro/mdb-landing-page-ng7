import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyComponent } from './agency/agency.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [AgencyComponent],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    AngularFontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    ScrollToModule.forRoot()
  ]
})
export class AgencyModule { }
