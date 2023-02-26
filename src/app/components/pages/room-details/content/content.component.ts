import { formatDate } from '@angular/common';
import { Component,OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
;
import { ActivatedRoute } from '@angular/router';
import { RoomHelperService } from '../../../services/room-helper.service';
import authors from '../../../data/authors.json';

import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';

import Swiper from "swiper";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent extends RoomHelperService implements OnInit {
  public testLengthPhone=false
  public tabPresonnes:any[]=[]
  public maxResvation:Date = new Date();
  public todayDate:Date = new Date();
 public DateArr:Date = new Date();
 public DateArr2:Date = new Date();
 public tabDate:any[]=[]
 public tarif:any
 reservationChambreForm = new FormGroup({

  date_arrive :new FormControl('',[Validators.required ]),
    date_depart : new FormControl('',[Validators.required ])
  
})
public user= new FormGroup({

  nom :new FormControl('',[Validators.required ]),
    prenom : new FormControl('',[Validators.required ]),
    email :new FormControl('',[Validators.required, Validators.email ]),
    phone : new FormControl('',[Validators.required,Validators.minLength(7),Validators.maxLength(8) ]),
    
  
})
validPhone(e:any){
  console.log(e)
  if(e.length !=8){
    console.log(e.length)
    console.log(e.value)
    console.log(this.testLengthPhone)
    this.testLengthPhone=true
  }
  if(e.length ==8){
    console.log(e.length)
    console.log(e.value)
    console.log(this.testLengthPhone)
    this.testLengthPhone=false
  }
}
 public DateNoDispoFilter= (d: Date): boolean => {
  if(d !== null){
    const time=d.getTime();
    console.log(d,'hhhha')
   
    var tab:any[]=[]  
    tab=this.tabDate.map(ele=>new Date(formatDate(ele, 'MM/dd/yyyy', 'en')))
   
    return !tab.find(x=>x.getTime()==time);
    
  }
 
else return true
 //!this.myHolidayDates.find(x=>x.getTime()==time);
}
  zoom: number = 12;
  lat: number = 31.53912;
  lng: number = -89.29163;
  room_selected:any = []
  step_active = 'step 1'
  titleRoom:any

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


  initRoomDetailsSlider(){
    new Swiper(".room-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop:true,
      /*pagination: {
      el: '',
        clickable: true,
      },*/
      navigation:{

        nextEl:".slide-room-right",
        prevEl:".slide-room-left"

      }
    })
  }
  

  createCoverSliderRoomDetails(slide:any){

    var container = document.createElement("div")
    
    container.setAttribute("class","swiper-slide")

    container.setAttribute("style",`

      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-image: url(${slide});

    `)

    this.containerSliderRoomDetails.appendChild(container)

  }

  getRoomDetails(items:any){

    var id  = parseInt(this.route.snapshot.params.id)
     
    items.map((item:any)=>{

      if(item.id === id){
        this.room_selected.push(item)
         this.titleRoom=item.title
         this.tabPresonnes=item.prixChambres

      }

    })

  }
  

  getDateDebutValue(e:any,dateInput:any){

    var date = Date.parse(e.target.value+"")
    
    var d = new Date(e.target.value+"")
    
    var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
    var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

    var date_final = [dt_Date, dt_Month, dt_Year].join('/')

    dateInput.value = date_final+""
    
    this.DateArr=e.target.value
    
    this.DateArr2 = new Date(e.target.value.setDate(e.target.value.getDate() + 1));
          
    console.log(this.DateArr2 ,"rrrr")
    this.tabDate.sort((a, b) => a.getTime() - b.getTime());
    if(this.tabDate.some(ele=>ele>this.DateArr.getTime())==true){
      
      this.maxResvation=this.tabDate.find(ele=>ele>this.DateArr.getTime())
      console.log(this.maxResvation,'max')
    }  
    if(this.tabDate.some(ele=>ele>this.DateArr.getTime())==false ){
      this.maxResvation=new Date("12/12/2028");
      console.log(this.maxResvation,"max2")
    }
  }

  getDateFinValue(e:any,dateInput:any){

    var date = Date.parse(e.target.value+"")
    
    var d = new Date(e.target.value+"")
    
    var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
    var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

    var date_final = [dt_Date, dt_Month, dt_Year].join('/')

    dateInput.value = date_final+""

  }


  nextStep(step:String){

    this.step_active = step+""

  }

  selectTarif(e:any){
    this.tarif=e.target.value  }
  confirmReservation(){
    this.reservationEnligneAndSendEmail({nom:this.user.get('nom')?.value,
                                         email:this.user.get('email')?.value,
                                         tel:this.user.get('phone')?.value,
                                         tarif:this.tarif,
                                         room:this.titleRoom,
                                         dateStart: this.reservationChambreForm.get("date_arrive")?.value,
                                         dateFin :this.reservationChambreForm.get(" date_depart ")?.value })
    alert("reservation confirmé")
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



/************************************* */





  onInit() {

    const  datatosent = {
      //startDate : this.favBooks.checkin,
      //endDate :  this.favBooks.checkout,
      //name : this.favBooks.room
    }
   
  }

  containerSliderRoomDetails:any

  ngOnInit(): void {

    // <<  get room details  >>

    this.getRoomDetails(this.roomdetails)

    this.getSingleSuite(this.titleRoom).subscribe((resp:any)=>{
      var newArray = Array.prototype.concat.apply([], resp);
     
      for(let i = 0; i< newArray.length; i++){
          this.tabDate.push(new Date(newArray[i].slice(0,10)))

           
      }
      console.log(this.titleRoom)
      console.log(resp)
    })
    
    var images:any

    this.containerSliderRoomDetails = document.getElementById("containerSliderRoomDetails")
   
    this.room_selected.map((r:any)=>{

      images = r.sliderimage

    })


    images.map((img:any)=>{

      this.createCoverSliderRoomDetails(img)

    })

    this.initRoomDetailsSlider()

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