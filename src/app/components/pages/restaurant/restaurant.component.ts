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
        "img": "https://www.challenges.fr/drupal/files/2022-02/restaurant-3.jpg"
       
    },
    {
        "id": 2,
        "img": "https://www.hoteldeluxe.info/wp-content/uploads/2013/06/Restaurant-Jean-Georges-du-Trump-International-Hotel-Tower-%C3%A0-New-York-City.png"
    },
    {
        "id": 3,
        "img": "https://media.cnn.com/api/v1/images/stellar/prod/141107163657-best-hotel-restaurant-restaurants-jean-george.jpg?q=w_720,h_405,x_0,y_0,c_fill/w_1280"
    }
  ]

  containerSliderTitles:any

  menuRestau:any = [
    {

      id:"Breakfast",
      title:"Breakfast",
      menu:[
        {
          name:"Breakfast menu 1",
          price:"45",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        },
        {
          name:"Breakfast menu 2",
          price:"45",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        },
        {
          name:"Breakfast menu 3",
          price:"45",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        },
        {
          name:"Breakfast menu 4",
          price:"45",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        },
        {
          name:"Breakfast menu 5",
          price:"45",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        }
      ]

    },
    {

      id:"Wine",
      title:"Wine",
      menu:[
        {
          name:"Wine menu 1",
          price:"34",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        },
        {
          name:"Wine menu 2",
          price:"34",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        },
        {
          name:"Wine menu 3",
          price:"34",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        },
        {
          name:"Wine menu 4",
          price:"34",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        },
        {
          name:"Wine menu 5",
          price:"34",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        }
      ]

    },
    {

      id:"Dessert",
      title:"Dessert",
      menu:[
        {
          name:"Dessert menu 1",
          price:"26",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        },
        {
          name:"Dessert menu 2",
          price:"26",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        },
        {
          name:"Dessert menu 3",
          price:"26",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        },
        {
          name:"Dessert menu 4",
          price:"26",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
        },
        {
          name:"Dessert menu 5",
          price:"26",
          phraseDescription:"Fried mozzarella sticks, marinara sauce"
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
      
      name:"personne 1",
      profession:"profession 1",
      image:"photo.jpg",
      rating:3,
      description:"Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan."

    },
    {
      
      name:"personne 2",
      profession:"profession 2",
      image:"photo.jpg",
      rating:4,
      description:"Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan."

    },
    {
      
      name:"personne 3",
      profession:"profession 3",
      image:"photo.jpg",
      rating:3,
      description:"Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan."

    },
    {
      
      name:"personne 4",
      profession:"profession 4",
      image:"photo.jpg",
      rating:5,
      description:"Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan."

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
        border: .1vw solid #aa8453;
        background-color:#aa8453;


      `)

    }

    if(slide.id==="Breakfast"){container.style.borderColor = "#aa8453"}

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
    client_image.src = "/assets/img/text-block/"+slide.image
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
        el: '.swiper-pagination',
        clickable: true,
      }
    })
  }

  containerTestimonialsSlider:any
  phoneScreen:any
  ngOnInit(): void {

    this.generateTitles()

    
    this.titleMenus.map((item:any)=>{

      this.createMenuTitle(item)

    })


    this.generateMenusItems("Breakfast")


    this.cover_restau_page_images.map((img:any)=>{

      this.createCoverSliderRestau(img)

    })

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

    this.initSliderMenuRestau()
    this.initRestausSlider()
    this.initTestimonialsSlider()

  }

}
