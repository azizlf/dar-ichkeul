import { Component, OnInit } from '@angular/core';

import Swiper from "swiper";

@Component({
  selector: 'app-prices-room-details',
  templateUrl: './prices-room-details.component.html',
  styleUrls: ['./prices-room-details.component.css']
})
export class PricesRoomDetailsComponent implements OnInit {

  // prices schema list

  prices = [

    {

      image:"dar-ic1.jpg",
      title:"titre 1",
      price:"50",
      services:[
        {
          name:"service 1",
          dispo:true
        },
        {
          name:"service 2",
          dispo:false
        },
        {
          name:"service 3",
          dispo:true
        }
      ] // max 3 service

    },
    {

      image:"dar-ic1.jpg",
      title:"titre 2",
      price:"100",
      services:[

        {
          name:"service 1",
          dispo:true
        },
        {
          name:"service 2",
          dispo:true
        },
        {
          name:"service 3",
          dispo:true
        }

      ] // max 3 service

    },
    {

      image:"dar-ic1.jpg",
      title:"titre 3",
      price:"200",
      services:[

        {
          name:"service 1",
          dispo:false
        },
        {
          name:"service 2",
          dispo:false
        },
        {
          name:"service 3",
          dispo:true
        }

      ] // max 3 service

    },
    {

      image:"dar-ic1.jpg",
      title:"titre 4",
      price:"250",
      services:[

        {
          name:"service 1",
          dispo:true
        },
        {
          name:"service 2",
          dispo:false
        },
        {
          name:"service 3",
          dispo:false
        }

      ] // max 3 service

    }

  ]

  constructor() { }

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
    const title_slide = document.createElement("p")
    const price = document.createElement("p")
    const price_number = document.createElement("span")

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
        height: 40%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;


    `)

    content_slide.setAttribute("style",`

        width: 100%;
        height: 60%;
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

    title_slide.setAttribute("style",`

        font-size: 1.9vw;
        font-family: 'Gilda Display', serif;

    `)

    price.setAttribute("style",`

        font-size: 1.6vw;
        font-family: 'Barlow Condensed', sans-serif;
        margin-top: 7%;
        color: gray;

    `)

    price_number.setAttribute("style",`

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


      read_more_btn.setAttribute("style",`

        position: absolute;
        top: 2%;
        right: 4%;
        border: .2vw solid white;
        color: white;
        font-family: 'Barlow Condensed', sans-serif; 
        padding: 0 2%;
        font-size: 11px; 

      `)

      title_slide.setAttribute("style",`

        font-size: 13px;
        font-family: 'Gilda Display', serif;
        margin: 0;

      `)

      price.setAttribute("style",`

        font-size: 9px;
        margin: 0;
        font-family: 'Barlow Condensed', sans-serif;
        color: gray;

      `)



    }


    container.setAttribute("class","slide swiper-slide")

    

    read_more_btn.setAttribute("class","read-more")

    

    cover_image.setAttribute("class","image-cover")



    cover_image.style.backgroundImage = "url('/assets/img/text-block/"+slide.image+"')"

    content_slide.setAttribute("class","content-slide")



    content.setAttribute("class","content")


    title_slide.setAttribute("class","title-slide")

    title_slide.innerText = slide.title+""


    price.setAttribute("class","price")


    price_number.innerText = slide.price+" DT"

    price.appendChild(price_number)

    price.innerHTML +="/jour"

    services_slide.setAttribute("class","services-slide")

    read_more_btn.innerText = "DETAILS"


    slide.services.map((s:any)=>{

      var service = document.createElement("div")
      var icon = document.createElement("i")

      if(this.phoneScreen.matches){

        service.setAttribute("style",`

          width: 100%;
          margin-top: 1%;
          padding: 1% 0;
          font-size: 10px;
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

      }else{

        service.setAttribute("style",`

          width: 100%;
          margin-top: 1%;
          padding: 3% 0;
          font-size: 1.3vw;
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
    content.appendChild(title_slide)
    content.appendChild(price)
    content.appendChild(services_slide)

    this.containerSlides.appendChild(container)

  }



  ngOnInit(): void {

    this.prices.map((item)=>{

      this.createSlide(item)

    })

    this.initPricesSlider()

  }

}
