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
    const read_more_btn = document.createElement("div")
    const cover_image = document.createElement("div")
    const content_slide = document.createElement("div")
    const content = document.createElement("div")
    const services_slide = document.createElement("div")
    const price = document.createElement("p")

    container.setAttribute("style",`

        width: 51%;
        height: 100%;

    `)

    read_more_btn.setAttribute("style",`

        position: absolute;
        top: 2%;
        right: 4%;
        border: .2vw solid white;
        padding: 1% 3%;
        font-size: 1.3vw;
        color: white;
        font-family: 'Barlow Condensed', sans-serif;  

    `)

    cover_image.setAttribute("style",`

        width: 100%;
        height: 50%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;


    `)

    content_slide.setAttribute("style",`

        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background-color: white;

    `)

    content.setAttribute("style",`

        width: 80%;
        height: 70%;
        display: block;
        color: black;

    `)

    price.setAttribute("style",`

      font-size: 2.6vw;
      font-family: 'Gilda Display', serif;
      color: #aa8453;

    `)

    services_slide.setAttribute("style",`

        width: 100%;
        height: 60%;

    `)


    //test screen width

    if(this.phoneScreen.matches){

      //for mobile 

      container.setAttribute("style",`

        width: 100%;
        height: 100%;

      `)

      read_more_btn.setAttribute("style",`

        position: absolute;
        top: 2%;
        right: 4%;
        border: .2vw solid white;
        color: white;
        font-family: 'Barlow Condensed', sans-serif; 
        padding: 3% 2%;
        font-size: 27px;

      `)

      price.setAttribute("style",`

        font-size: 46px;
        font-family: 'Gilda Display', serif;
        color: #aa8453;

      `)



    }


    container.setAttribute("class","slide swiper-slide")

    

    read_more_btn.setAttribute("class","read-more")

    

    cover_image.setAttribute("class","image-cover")



    cover_image.style.backgroundImage = "url('"+slide.img+"')"

    content_slide.setAttribute("class","content-slide")



    content.setAttribute("class","content")


    price.setAttribute("class","price")


    price.innerText = slide.title+""

    services_slide.setAttribute("class","services-slide")

    read_more_btn.innerText = "DETAILS"


    slide.services.map((s:any)=>{

      var service = document.createElement("div")
      var icon = document.createElement("i")

      if(this.phoneScreen.matches){

        service.setAttribute("style",`

          width: 100%;
          margin-top: 1%;
          padding: 4% 0;
          font-size: 19px;
          display: flex;
          align-items: center;
          font-family: 'Barlow Condensed', sans-serif;    

        `)

        icon.setAttribute("style",`

          width: 11%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

        `)

      }
      else{

        service.setAttribute("style",`

          width: 100%;
          margin-top: 1%;
          padding: 4% 0;
          font-size: 1.5vw;
          display: flex;
          align-items: center;
          font-family: 'Barlow Condensed', sans-serif;    

        `)

        icon.setAttribute("style",`

          width: 11%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

        `)

      }

      if(s.dispo){
      
        icon.setAttribute("class","fa-solid fa-check")
      
      }else{

        icon.setAttribute("class","fa-solid fa-xmark")

      }

      service.appendChild(icon)
      service.innerHTML += s.name
      services_slide.appendChild(service)

    })


    container.appendChild(read_more_btn)
    container.appendChild(cover_image)
    container.appendChild(content_slide)
    content_slide.appendChild(content)
    content.appendChild(price)
    content.appendChild(services_slide)

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
