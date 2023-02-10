import { Component, OnInit } from '@angular/core';
import * as  AOS from 'aos';
import Swiper from "swiper";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { 

    AOS.init();

  }

  cover_restau_page_images = [
    {
        "id": 1,
        "img": "https://d1vp8nomjxwyf1.cloudfront.net/wp-content/uploads/sites/364/2021/04/01101407/Restaurant-HotelGRandAmour-%40PionPhotographie-4.jpg"
       
    },
    {
        "id": 2,
        "img": "https://tunisie.co/uploads/images/content/trt-210622-1.jpg"
    },
    {
        "id": 3,
        "img": "https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg"
    },
    {
        "id": 4,
        "img": "assets/img/aboutcarousel/03.jpg"
    },
    {
        "id": 5,
        "img": "https://www.fribourgregion.ch/wp-content/uploads/2022/03/randonnee_hb.jpg"
    }
  ]

  actsList:any = [

    {
      title:"RESTAURANT",
      image:"https://d1vp8nomjxwyf1.cloudfront.net/wp-content/uploads/sites/364/2021/04/01101407/Restaurant-HotelGRandAmour-%40PionPhotographie-4.jpg",
      description:"Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"left"
    },
    {
      title:"PISCINE",
      image:"https://tunisie.co/uploads/images/content/trt-210622-1.jpg",
      description:"Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"right"

    },
    {
      title:"EQUITATION",
      image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      description:"Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"left"

    },
    {
      title:"TENNIS",
      image:"assets/img/aboutcarousel/03.jpg",
      description:"Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"right"

    },
    {
      title:"RANDONNÉE",
      image:"https://www.fribourgregion.ch/wp-content/uploads/2022/03/randonnee_hb.jpg",
      description:"Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"left"

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
