import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { RoomDetailsRoutingModule } from './room-details-routing.module';
import { RoomDetailsComponent } from './room-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';

/***********material ************ */
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { TestimonialsComponent } from '../home-v2/testimonials/testimonials.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AboutModule } from '../about/about.module';
import { RoomSliderComponent } from '../home-v3/room-slider/room-slider.component';
import { HomeV3Module } from '../home-v3/home-v3.module';
/********************************* */



@NgModule({
  declarations: [RoomDetailsComponent, ContentComponent],
  imports: [
    CommonModule,
    RoomDetailsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    SlickCarouselModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HomeV3Module,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnd9JwZvXty-1gHZihMoFhJtCXmHfeRQg'
    })
  ]
})
export class RoomDetailsModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}