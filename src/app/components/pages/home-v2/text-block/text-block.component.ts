import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import * as  AOS from 'aos';
import { RoomHelperService } from 'src/app/components/services/room-helper.service';

import Swiper from "swiper";

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.css']
})
export class TextBlockComponent implements OnInit {

  // rooms schema lists

  rooms = [

    {
      id:0,
      image:"dar-ic1.jpg",
      title:"Family Room 1",
      price:"100",
      description:"Une suite moderne et luxueuse baignée de lumière naturelle, offrant un intérieur chaleureux et apaisant avec un fabuleux paysage, vous permet de contempler la beauté de la ville, de jour comme de nuit"
    },
    {
      id:1,
      image:"dar-ic2.jpg",
      title:"Family Room 2",
      price:"130",
      description:"Une suite moderne et luxueuse baignée de lumière naturelle, offrant un intérieur chaleureux et apaisant avec un fabuleux paysage, vous permet de contempler la beauté de la ville, de jour comme de nuit"
    },
    {
      id:2,
      image:"dar-ic3.jpg",
      title:"Family Room 3",
      price:"150",
      description:"Une suite moderne et luxueuse baignée de lumière naturelle, offrant un intérieur chaleureux et apaisant avec un fabuleux paysage, vous permet de contempler la beauté de la ville, de jour comme de nuit"
    },
    {
      id:3,
      image:"dar-ic1.jpg",
      title:"Family Room 4",
      price:"250",
      description:"Une suite moderne et luxueuse baignée de lumière naturelle, offrant un intérieur chaleureux et apaisant avec un fabuleux paysage, vous permet de contempler la beauté de la ville, de jour comme de nuit"
    },
    {
      id:4,
      image:"dar-ic2.jpg",
      title:"Family Room 5",
      price:"200",
      description:"Une suite moderne et luxueuse baignée de lumière naturelle, offrant un intérieur chaleureux et apaisant avec un fabuleux paysage, vous permet de contempler la beauté de la ville, de jour comme de nuit"
    }

  ]

  vertical_items:any = []
  
  horizontal_items:any = []


  
  vertical_Suites:any = this.suites.rooms.slice(6)
  
  horizontal_Suites:any = this.suites.rooms.slice(0,3)
  horizontal_Suites2:any = this.suites.rooms.slice(3,6)
  // testimonials schema list

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


  initRoomsList(){

    for(let i=0 ; i < this.rooms.length ; i++){

      if(i <= 2){

        this.vertical_items.push(this.rooms[i])

      }else{

        this.horizontal_items.push(this.rooms[i])

      }

    }

  }


  initTestimonialsSlider(){
    new Swiper(".testimonilas-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    })
  }

  phoneScreen:any
  containerTestimonialsSlider:any

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
      margin-top: 3%;

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
      padding-left: 3%;
      margin-top: 2%;
      color: #aa8453;

    `)

    description.setAttribute("style",`

      width: 95%;
      height: 50%;
      margin-left: 3%;
      margin-top: 1%;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1.5vw;

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

    name.appendChild(client_name)
    name.appendChild(client_profession)


    client_info.appendChild(client_image)
    client_info.appendChild(name)


    container.appendChild(client_info)
    container.appendChild(rating)
    container.appendChild(description)

    container.setAttribute("class","swiper-slide")

    this.containerTestimonialsSlider.appendChild(container)

  }


  constructor(public suites:RoomHelperService ,private route:Router) { 
  
    AOS.init();

  }


  ngOnInit(): void {

    this.testimonials.map((item)=>{

      this.createSlideAvis(item)

    })

    this.containerTestimonialsSlider = document.getElementById("containerSwiperTestimonials")

    this.phoneScreen = window.matchMedia('(max-width: 700px)')

    const pagination_container = document.createElement("div")

    pagination_container.setAttribute("class","swiper-pagination")

    pagination_container.setAttribute("style",`

      width: 79%;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: right;
      position: absolute;
      bottom: 17%;
      transform: scale(1.5);

    `)

    if(this.phoneScreen.matches){


      pagination_container.setAttribute("style",`

        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: -4%;

      `)


    }

    this.containerTestimonialsSlider.appendChild(pagination_container)

    this.initRoomsList()

    this.initTestimonialsSlider()

  }
//Routing

}