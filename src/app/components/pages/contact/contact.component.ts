import { Component, OnInit } from '@angular/core';
import Swiper from "swiper";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  cover_restau_page_images = [
    {
        "id": 1,
        "img": "assets/img/photos_new_content/les_salons/IMG_6905.jpg"
       
    },
    {
        "id": 2,
        "img": "assets/img/photos_new_content/les_salons/169123192_740311870016706_1645887951205821900_n.jpg"
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
