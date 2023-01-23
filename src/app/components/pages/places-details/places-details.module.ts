import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { PlacesDetailsRoutingModule } from './places-details-routing.module';
import { PlacesDetailsComponent } from './places-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [PlacesDetailsComponent, ContentComponent],
  imports: [
    CommonModule,
    PlacesDetailsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
})
export class PlacesDetailsModule { }
