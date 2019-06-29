import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalComponent } from './medical/medical.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [MedicalComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    ScrollToModule.forRoot(),
    MatTabsModule
  ]
})
export class MedicalModule { }
