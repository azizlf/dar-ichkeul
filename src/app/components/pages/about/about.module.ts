import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';
import { CoreFeatureComponent } from './core-feature/core-feature.component';
import { CounterTwoComponent } from './counter-two/counter-two.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { TestimonialsComponent } from '../home-v2/testimonials/testimonials.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RoomSliderComponent } from '../home-v3/room-slider/room-slider.component';
import { HomeV3Module } from '../home-v3/home-v3.module';


@NgModule({
  declarations: [AboutComponent, AboutTextComponent, CoreFeatureComponent, CounterTwoComponent, BlogPostComponent, TestimonialsComponent, ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    SlickCarouselModule,
    NgbModule,
    HomeV3Module
    
  ]
})
export class AboutModule { }
