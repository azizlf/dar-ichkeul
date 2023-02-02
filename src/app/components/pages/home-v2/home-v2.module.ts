import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeV2RoutingModule } from './home-v2-routing.module';
import { HomeV2Component } from './home-v2.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { CoreFeaturesComponent } from './core-features/core-features.component';
import { FeatureRoomComponent } from './feature-room/feature-room.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { VideoWrapComponent } from './video-wrap/video-wrap.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { InstagramComponent } from './instagram/instagram.component';

/***********material ************ */
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MenuAreaComponent } from '../home-v3/menu-area/menu-area.component';
import { AboutTextComponent } from '../home-v3/about-text/about-text.component';
import { LogoComponent } from './logo/logo.component';
import { PricesComponent } from './text-block/prices/prices.component';

/********************************* */

@NgModule({
  declarations: [HomeV2Component, BannerComponent, TextBlockComponent, CoreFeaturesComponent, FeatureRoomComponent, VideoWrapComponent, BlogPostComponent, InstagramComponent, MenuAreaComponent,AboutTextComponent, LogoComponent, PricesComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeV2RoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class HomeV2Module { }
