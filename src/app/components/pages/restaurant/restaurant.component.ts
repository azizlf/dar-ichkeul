import { Component, OnInit } from '@angular/core';
import Swiper from "swiper";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  containerSliderRestau:any

  cover_restau_page_images = [
    {
        "id": 1,
        //"img": "assets/img/photos_new_content/les_slides/IMG-0307.jpg"
        img:"/assets/img/photos_new_content/les_slides/IMG-0307.jpg"
    },
    {
        "id": 2,
        //"img": "assets/img/photos_new_content/les_slides/B0F1A858-DD8D-468A-89C0-1C9C0494E37A.JPG"
        img:"/assets/img/photos_new_content/les_slides/IMG-0307.jpg"
    } 
  ]

  containerSliderTitles:any

  menuRestau:any = [
    {

      id:"entree_froide",
      title:"ENTRÉE FROIDES",
      menu:[
        {
          name:"Salade tunisienne",
          price:"12",
          phraseDescription:""
        },
        {
          name:"Salade de capese",
          price:"18",
          phraseDescription:""
        },
        {
          name:"Salade méchouia",
          price:"13",
          phraseDescription:""
        },
        {
          name:"Salade niçoise",
          price:"14",
          phraseDescription:""
        },
        {
          name:"Salade César",
          price:"18",
          phraseDescription:""
        },
        {
          name:"Assiette Dar Ichkeul",
          price:"14",
          phraseDescription:""
        },
        {
          name:"Assiette de saumon fumé",
          price:"25",
          phraseDescription:""
        }
      ]

    },
    {

      id:"enter_chaude",
      title:"ENTRÉE CHAUDE",
      menu:[
        {
          name:"Soupe à l'agneau",
          price:"16",
          phraseDescription:""
        },
        {
          name:"Brik au thion",
          price:"6",
          phraseDescription:""
        },
        {
          name:"Brik à la viande",
          price:"7",
          phraseDescription:""
        }
      ]

    },
    {

      id:"nos_spec",
      title:"NOS SPÉCIALITÉS",
      menu:[
        {
          name:"Agneau à la gargoulette",
          price:"35",
          phraseDescription:""
        },
        {
          name:"Côtlette d'agneau grillée",
          price:"32",
          phraseDescription:""
        },
        {
          name:"Entrecôte grillé beurre",
          price:"40",
          phraseDescription:""
        },
        {
          name:"Filet de boeuf",
          price:"45",
          phraseDescription:""
        },
        {
          name:"Grillades mixtes",
          price:"39",
          phraseDescription:""
        },
        {
          name:"Cailles grillées",
          price:"28",
          phraseDescription:""
        },
        {
          name:"Escalope de poulet à la créme",
          price:"28",
          phraseDescription:""
        },
        {
          name:"Escalope de poulet panné",
          price:"25",
          phraseDescription:""
        },
        {
          name:"Ojja Merguez",
          price:"18",
          phraseDescription:""
        },
        {
          name:"Ojja chevrettes",
          price:"28",
          phraseDescription:""
        }
      ]

    },
    {

      id:"pates",
      title:"PÂTES",
      menu:[

        {
          name:"Nwasser au poulet fermier",
          price:"20",
          phraseDescription:""
        },
        {
          name:"Spaghettis Bolognaises",
          price:"19",
          phraseDescription:""
        }

      ]
    },
    {

      id:"boissons",
      title:"BOISSONS",
      menu:[

        {
          name:"Eau Minérale 1L",
          price:"3",
          phraseDescription:""
        },
        {
          name:"Eau gazeuse 1L",
          price:"3",
          phraseDescription:""
        },
        {
          name:"Soda",
          price:"4",
          phraseDescription:""
        },
        {
          name:"Jus d'Orange",
          price:"6",
          phraseDescription:""
        },
        {
          name:"Jus de fraise",
          price:"6",
          phraseDescription:""
        },
        {
          name:"Citronade",
          price:"4",
          phraseDescription:""
        },
        {
          name:"Boissons énergétiques",
          price:"8",
          phraseDescription:""
        },
        {
          name:"Nepresso",
          price:"4.5",
          phraseDescription:""
        }

      ]
    },
    {

      id:"desserts",
      title:"DESSERTS",
      menu:[

        {
          name:"Sorbet",
          price:"4",
          phraseDescription:""
        },
        {
          name:"Assiette de fruits (1pax)",
          price:"8",
          phraseDescription:""
        }

      ]
    }
  ]

  titleMenus:any = []

  menusItems:any = []

  menuLeft:any = []
  menuRight:any = []

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

  generateTitles(){

    this.menuRestau.forEach((item:any)=>{

      this.titleMenus.push({id:item.id,title:item.title})

    })

  }

  generateMenusItems(itemId:any){

    this.menuLeft = []
    this.menuRight = []

    this.menusItems = []

    this.menuRestau.map((item:any)=>{

      if(item.id === itemId){
        var list:any = item.menu

        list.map((l:any)=>{

          this.menusItems.push(l)

        })
      }

    })

    this.generateMenusRestau()

  }

  generateMenusRestau(){

    for(let i=0 ; i < this.menusItems.length ; i++){

      if(i >= (this.menusItems.length+1)/2){

        this.menuRight.push(this.menusItems[i])

      }else{

        this.menuLeft.push(this.menusItems[i])

      }

    }

  }

  btnActiveTitle:any

  createMenuTitle(slide:any){

    var phoneScreen = window.matchMedia('(max-width:   700px)')

    this.containerSliderTitles = document.getElementById("containerSliderTitles")

    var container = document.createElement("div")
    
    container.setAttribute("class","swiper-slide")

    container.id = slide.id

    container.innerText = slide.title+""

    container.addEventListener("click",()=>{

      this.generateMenusItems(container.id)

      this.titleMenus.map((item:any)=>{

        this.btnActiveTitle = document.getElementById(item.id)

        this.btnActiveTitle.style.borderColor = "transparent"

      })
        
      container.style.borderColor = "#aa8453"

    })

    container.setAttribute("style",`

      width: 35%;
      height: 10%;
      padding: 3% 0;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      font-family: 'Gilda Display', serif;
      font-size: 2vw;
      cursor: pointer;
      border: .1vw solid transparent;


    `)

    if(phoneScreen.matches){

      container.setAttribute("style",`

        width: 35%;
        height: 10%;
        padding: 3% 0;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        font-family: 'Gilda Display', serif;
        font-size: 15px;
        cursor: pointer;
        border: .1vw solid transparent;;


      `)

    }

    if(slide.id==="entree_froide"){container.style.borderColor = "#aa8453"}

    this.containerSliderTitles.appendChild(container)


  }

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

  initSliderMenuRestau(){
    
    new Swiper(".slider-menu",{
      slidesPerView: 3,
      spaceBetween: 10,
      grabCursor: true,
      centeredSlides: false,
      loop: false,
      navigation:{
        nextEl:".right-menu-btn",
        prevEl:".left-menu-btn"
      }
    })

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

  containerTestimonialsSlider:any
  containerTestSlider:any
  phoneScreen:any
  ngOnInit(): void {

    this.generateTitles()

    
    this.titleMenus.map((item:any)=>{

      this.createMenuTitle(item)

    })


    this.generateMenusItems("entree_froide")


    this.cover_restau_page_images.map((img:any)=>{

      this.createCoverSliderRestau(img)

    })

    
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

    this.initSliderMenuRestau()
    this.initRestausSlider()

  }

}
