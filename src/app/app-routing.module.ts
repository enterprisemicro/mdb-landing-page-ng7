import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyComponent } from './agency/agency/agency.component';
import { UniversityComponent } from './education/university/university.component';

const routes: Routes = [{
  "path": "",
  "redirectTo": "agency",
  "pathMatch": "full"
}, {
  "path": "agency",
  "component": AgencyComponent
}, {
  "path": "university",
  "component": UniversityComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 90]
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
