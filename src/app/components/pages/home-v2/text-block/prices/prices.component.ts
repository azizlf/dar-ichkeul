import { Component, OnInit } from '@angular/core';
import gallery from '../../../../data/menugallery.json';

import Swiper from "swiper";

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {



  // prices schema list

  prices = gallery


  initPricesSlider(){

    new Swiper(".tranding-slider", {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      navigation: {
        nextEl: '.slide-right',
        prevEl: '.slide-left',
      }
    })

  }

  containerSlides:any

  phoneScreen:any
 
  createSlide(slide:any){

    this.phoneScreen = window.matchMedia('(max-width:   700px)')

    this.containerSlides = document.getElementById("containerSlides")

    const container = document.createElement("div")
    const cover_image = document.createElement("div")

    container.setAttribute("style",`

        width: 51%;
        height: 100%;
        display: flex;
        align-items: center;

    `)

    cover_image.setAttribute("style",`

        width: 100%;
        height: 50%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;


    `)

    if(this.phoneScreen.matches){

      container.setAttribute("style",`

        width: 100%;
        height: 100%;

      `)

    }

    container.setAttribute("class","swiper-slide")

    cover_image.style.backgroundImage = "url('"+slide.img+"')"

    container.appendChild(cover_image)

    this.containerSlides.appendChild(container)

  }


  constructor() { }

  ngOnInit(): void {

    this.prices.map((item:any)=>{

      this.createSlide(item)

    })

    this.initPricesSlider()

  }

}
