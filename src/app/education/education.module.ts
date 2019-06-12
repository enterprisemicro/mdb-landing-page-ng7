import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { UniversityComponent } from './university/university.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [UniversityComponent],
  imports: [
    CommonModule,
    EducationRoutingModule,
    AngularFontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ]
})
export class EducationModule { }
