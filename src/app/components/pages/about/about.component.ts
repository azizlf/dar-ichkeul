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
  
  /*cover_restau_page_images = [
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
  ]*/


  cover_restau_page_images = [

    {
      id:"1",
      img:"/assets/img/photos_new_content/les_slides/IMG-0307.jpg"
    }

  ]

  containerSliderRestau:any

  containerTestimonialsSlider:any

  phoneScreen:any


  testimonials = [

    {
      
      name:"Mohamed Amous",
      profession:"Founder, qux co.",
      image:"assets/img/testimonial/01.png",
      rating:5,
      description:"Nous avons passé le week-end dernier un séjour en famille dans cette merveilleuse maison d hotes. L'accueil et le service sont à la hauteur de ce site exceptionnel."

    },
    {
      
      name:"Sarra Mihoub",
      profession:"Founder, hilix",
      image:"assets/img/testimonial/02.png",
      rating:5,
      description:"Une belle surprise sur la région de Bizerte pour moi j'adore l'endroit reste à voir sur place 😍."

    },
    {
      
      name:"Ahlem Amara",
      profession:"Founder, Condo",
      image:"assets/img/testimonial/03.png",
      rating:5,
      description:"un endroit féérique et un service hors norme, top."

    },
    {
      
      name:"Khédija Siala Bouassida",
      profession:"Founder, hilix",
      image:"assets/img/testimonial/04.png",
      rating:5,
      description:"On a fait l'expérience et c'était Magnifique vraiment exceptionnel."

    }

  ]

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


  createSlideAvis(slide:any){

    this.containerTestimonialsSlider = document.getElementById("containerTestimonialsSlider")

    const container = document.createElement("div")
    const client_info = document.createElement("div")
    const name = document.createElement("div")
    const rating = document.createElement("div")
    const description = document.createElement("div")

    const client_image = document.createElement("img")
    const client_name = document.createElement("div")
    const client_profession = document.createElement("div")

    var reste_rating = 5 - slide.rating

    this.phoneScreen = window.matchMedia('(max-width: 700px)')


    client_name.innerText = slide.name
    client_profession.innerText = slide.profession
    description.innerText = slide.description
    client_image.src = slide.image
    client_name.innerText = slide.name

        container.setAttribute("style",`

      width: 100%;
      height: 100%;
      overflow: hidden;
      user-select: none;

    `)

    client_info.setAttribute("style",`

      width: 100%;
      height: 30%;
      display: flex;
      align-items: center;

    `)

    name.setAttribute("style",`

      width: 60%;
      margin-left: 1%;
      font-size: 1.5vw;
      font-family: 'Barlow Condensed', sans-serif;
      letter-spacing: .1vw;

    `)


    client_image.setAttribute("style",`

      width: 9%;
      border-radius: 100vw;
      margin-left: 2%;

    `)


    client_profession.setAttribute("style",`

      font-size: 1.2vw;

    `)

    rating.setAttribute("style",`

      width: 100%;
      display: flex;
      align-items: center;
      font-size: 1vw;
      margin-top: 2%;
      color: #aa8453;

    `)

    description.setAttribute("style",`

      width: 95%;
      margin-left: 3%;
      margin-top: 1%;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1.5vw;
      line-height: 2vw;

    `)


    if(this.phoneScreen.matches){

      name.setAttribute("style",`

        width: 60%;
        margin-left: 1%;
        font-size: 14px;
        font-family: 'Barlow Condensed', sans-serif;
        letter-spacing: .1vw;

      `)
      client_profession.setAttribute("style",`

        font-size: 10px;

      `)

      description.setAttribute("style",`

        width: 95%;
        height: 34%;
        margin-left: 3%;
        margin-top: 1%;
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 13px;

      `)





    }


    for(let i=1 ; i <= slide.rating ; i++){

      var icon = document.createElement("i")

      icon.setAttribute("class","fa-solid fa-star")

      rating.appendChild(icon)

    }

    if(reste_rating != 0 ){

      for(let i=1 ; i <= reste_rating ; i++){

        var icon = document.createElement("i")


        icon.setAttribute("class","fa-regular fa-star")

        rating.appendChild(icon)

      }

    }

    name.appendChild(rating)
    name.appendChild(client_name)
    name.appendChild(client_profession)


    client_info.appendChild(client_image)
    client_info.appendChild(name)


    container.appendChild(description)
    container.appendChild(client_info)

    container.setAttribute("class","swiper-slide")

    this.containerTestimonialsSlider.appendChild(container)

  }

  initTestimonialsSlider(){
    new Swiper(".testimonilas-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.pagination-testimonials-pc',
        clickable: true,
      }
    })
  }

  initTestimonialsSliderMobile(){
    new Swiper(".testimonials-slider", {
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: '.pagination-testimonials',
        clickable: true,
      }
    })
  }

  toBottom(section:any){

    section.scrollIntoView({ behavior: "smooth"});

  }

  containerTestSlider:any

  ngOnInit(): void {

    this.phoneScreen = window.matchMedia('(max-width: 700px)')


    if(this.phoneScreen.matches){

      this.containerTestSlider = document.getElementById('containerTestSlider')

      this.containerTestSlider.style.display = "none"

      this.containerTestSlider = document.getElementById('containerTestSliderMobile')

      this.containerTestSlider.style.display = "flex"

      this.initTestimonialsSliderMobile()

    }else{

      this.containerTestSlider = document.getElementById('containerTestSlider')

      this.containerTestSlider.style.display = "flex"

      this.containerTestSlider = document.getElementById('containerTestSliderMobile')

      this.containerTestSlider.style.display = "none"

      this.testimonials.map((item)=>{

        this.createSlideAvis(item)

      })

      this.initTestimonialsSlider()

    }

    this.cover_restau_page_images.map((img:any)=>{

      this.createCoverSliderRestau(img)

    })

    this.initRestausSlider()
    this.initTestimonialsSlider()

  }

}
