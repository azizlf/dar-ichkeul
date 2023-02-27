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

  current_form = "date"
  msgBoxReserv:any

  nextForm(){
    if(this.current_form === "date"){
      this.current_form = "infos"
    }else{
      this.current_form = "date"
    }
  }

  confirmReservation(){

    this.msgBoxReserv = document.getElementById("msgBoxReserv")

    this.msgBoxReserv.style.display = "flex"

    setTimeout(()=>{
      this.msgBoxReserv.style.opacity = "0"
      this.msgBoxReserv.style.right = "-1%"
      setTimeout(()=>{
        this.msgBoxReserv.style.display = "none"
        this.msgBoxReserv.style.opacity = "1"
        this.msgBoxReserv.style.right = "2%"
      },1000)
    },9000)

  }
    
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

  toBottom(section:any){

    section.scrollIntoView({ behavior: "smooth"});

  }

  ngOnInit(): void {

    this.cover_restau_page_images.map((img:any)=>{

      this.createCoverSliderRestau(img)

    })

    this.initRestausSlider()
  }

}
