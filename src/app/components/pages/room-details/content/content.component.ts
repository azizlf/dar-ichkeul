import { formatDate } from '@angular/common';
import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoomHelperService } from '../../../services/room-helper.service';
import authors from '../../../data/authors.json';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent extends RoomHelperService {
  zoom: number = 12;
  lat: number = 31.53912;
  lng: number = -89.29163;
  
 

  title = 'BindingUp';
  favBooks = {}
  checkserver = false;


  /*********************** */
  images = [
    {
        "id": 1,
        "img": "assets/img/aboutcarousel/01.jpg"
       
    },
    {
        "id": 2,
        "img": "assets/img/aboutcarousel/02.jpg"
    },
    {
        "id": 3,
        "img": "assets/img/aboutcarousel/03.jpg"
    },
    {
        "id": 4,
        "img": "assets/img/aboutcarousel/04.jpg"
    },
    {
        "id": 5,
        "img": "assets/img/aboutcarousel/05.jpg"
    },
    {
        "id": 6,
        "img": "assets/img/aboutcarousel/06.jpg"
    }
  ]

  /*********************** */

  settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ]
  };

  slide:any
  slideWidth:any

  slides = "0"

  nextSlide(id:any){

    this.slide = document.getElementById("sliderImagesRoomDetails")

    this.slideWidth = document.getElementById(id)

    this.slide.scrollBy({
        left: this.slide.scrollLeft + this.slideWidth.offsetWidth,
        behavior: 'smooth'
    });

  }

  previousSlide(id:any){

    this.slide = document.getElementById("sliderImagesRoomDetails")

    this.slideWidth = document.getElementById(id)

    this.slide.scrollBy({
        left: this.slide.scrollLeft - (this.slideWidth.offsetWidth*3),
        behavior: 'smooth'
    });

  }
  
  
/***************************** */


public testimonials = authors;
/*
settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  fade: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: true,
  responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
          },
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
          },
      },
  ],
};*/





/************************************* */









  onInit() {
    const  datatosent = {
      //startDate : this.favBooks.checkin,
      //endDate :  this.favBooks.checkout,
      //name : this.favBooks.room
    }
   
  }

  onBookAdded(eventData: { startDate: string , endDate:string, room:string}) {
   
   // console.log("event data >>>", eventData);
    
     this.favBooks = ({
       checkin: eventData.startDate,
       checkout: eventData.endDate,
       room: eventData.room,
    });

   //console.log("event storage>>>", this.favBooks);
   
    this.checkAvailableBooking(eventData).subscribe((data:any) => {
      

    //  console.log("data from server>>>>", data);
      if(data.message == 'la date est disponible !'){
         
        this.showNotification(
            ['success'],
            data.message,
            'top',
            'end'
          );

          this.checkserver = true;
        }   
      
      else{
        
         this.showNotification(
          ['error'],
           data.message,
          'top',
          'end'
        );
        this.checkserver = false;
      }
      })
   

    
  }



  onAddInfo(eventData: { type: string , number_persone: number, nom: string, prenom: string, email: string, phone_number: string, tarif:number }){
   // console.log("add info >>>", eventData);
    this.favBooks = {...this. favBooks, ...eventData }
   // console.log("event storage 2 >>>", this.favBooks);
    //traitement avec le server 
    // send eail 

    this.reservationEnligneAndSendEmail(this.favBooks).subscribe(data => {
       // console.log("data email to send>>>", data);
        
    })
  }


  


}
