import { Component, OnInit } from '@angular/core';
import * as  AOS from 'aos';
import Swiper from "swiper";


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { 

    AOS.init();

  }

  /*cover_restau_page_images = [
    {
        "id": 1,
        "img": "assets/img/photos_new_content/tennis/IMG_6716.jpg"
    },
    {
        "id": 2,
        "img": "assets/img/photos_new_content/equitation/169819305_740302160017677_5655585245396388206_n.jpg"
    },
    {
        "id": 4,
        "img": "assets/img/photos_new_content/les_slides/2d396e4f-86c9-4161-8d10-b06dded9ce67.jpg"
    },
    {
        "id": 3,
        "img": "assets/img/photos_new_content/equitation/196094469.jpg"
    },
    {
        "id": 5,
        "img": "assets/img/photos_new_content/les_slides/IMG-0307.jpg"
    }
  ]*/

  cover_restau_page_images = [

    {
      id:"1",
      img:"/assets/img/photos_new_content/les_slides/IMG-0307.jpg"
    }

  ]

  actsList:any = [

    {
      title:"RESTAURANT",
      image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      //image:"assets/img/photos_new_content/les_slides/IMG-0307.jpg",
      description:"Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"left"
    },
    {
      title:"PISCINE",
      image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      //image:"assets/img/photos_new_content/les_slides/2d396e4f-86c9-4161-8d10-b06dded9ce67.jpg",
      description:"",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"right"

    },
    {
      title:"EQUITATION",
      image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      //image:"assets/img/photos_new_content/equitation/169819305_740302160017677_5655585245396388206_n.jpg",
      description:"Nous proposons  des balades  en montagne dans la région de Mateur.  Ce sont des chevaux adorables pour tous niveaux et tous âges ! Venez en famille, entre amis, ou même en amoureux…",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"left"

    },
    {
      title:"TENNIS",
      image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      //image:"assets/img/photos_new_content/tennis/IMG_6716.jpg",
      description:"",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"right"

    },
    {
      title:"RANDONNÉE",
      image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      //image:"https://www.fribourgregion.ch/wp-content/uploads/2022/03/randonnee_hb.jpg",
      description:"Nos randonnées accompagnées sont placées sous le signe de la convivialité et de l’exploration. Que vous ayez envie de bien-être, de découverte ou d’aventure,Partez en petit groupe découvrir les richesses d’une région ou d’un massif. Nos guides locaux, experts de leurs territoires et amoureux de la nature partageront avec vous leurs mille et une connaissances.",
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
