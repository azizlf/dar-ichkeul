import { Component, OnInit } from '@angular/core';
import * as  AOS from 'aos';
import Swiper from "swiper";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {

    AOS.init();


  }
  
  cover_restau_page_images = [
    {
        "id": 1,
        "img": "assets/img/photos_new_content/les_slides/02d26d31-7ec1-437f-8404-116d23297f80.jpg"
       
    },
    {
        "id": 2,
        "img": "assets/img/photos_new_content/les_slides/178483159_751807848867108_6722969823734392856_n.jpg"
    },
    {
        "id": 3,
        "img": "assets/img/photos_new_content/les_slides/2d396e4f-86c9-4161-8d10-b06dded9ce67.jfif"
    }
  ]

  containerSliderRestau:any

  createCoverSliderRestau(slide:any){

    this.containerSliderRestau = document.getElementById("containerSliderRestau")

    var container = document.createElement("div")
    
    container.setAttribute("class","swiper-slide")

    container.setAttribute("style",`

      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-image: url(${slide.img});

    `)

    this.containerSliderRestau.appendChild(container)

  }

  initRestausSlider(){
    new Swiper(".restau-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop:true,
      navigation:{

        nextEl:".slide-restau-right",
        prevEl:".slide-restau-left"

      }
    })
  }

  ngOnInit(): void {

    this.cover_restau_page_images.map((img:any)=>{

      this.createCoverSliderRestau(img)

    })

    this.initRestausSlider()
  }

}
