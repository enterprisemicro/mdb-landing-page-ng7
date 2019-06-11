import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AgencyModule } from './agency/agency.module';
import { EducationModule } from './education/education.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AgencyModule,
    EducationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
