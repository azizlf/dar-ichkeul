import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import Swiper from "swiper";
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { RoomHelperService } from 'src/app/components/services/room-helper.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private helper:RoomHelperService){}
 public testLengthPhone=false
  public  tabMax:any[]=[]    
  public maxResvation:Date = new Date();
  public todayDate:Date = new Date();
  public testLengthPr=false
  public DateArr: any
  arriver:any
  depart:any
  suites:any[]=[]
  tabDate:any[]=[]
  makes:any[]=[]
  tabSuitesDispo:any[]=[]

  DateNoDispoFilter2= (d: Date): boolean => {
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

  reservationChambreForm = new FormGroup({

    date_arrive :new FormControl('',[Validators.required ]),
    date_depart : new FormControl('',[Validators.required ])
    
  })

  reservationChambreFormMobile = new FormGroup({

    date_arrive_mobile :new FormControl('',[Validators.required ]),
    date_depart_mobile : new FormControl('',[Validators.required ])
    
  })




  client_info = new FormGroup({

    nom :new FormControl('',[Validators.required ]),
    prenom : new FormControl('',[Validators.required ]),
    email : new FormControl('',[Validators.required , Validators.email]),
    tel : new FormControl('',[Validators.required]),
    nbr_personne : new FormControl('',[Validators.required,Validators.max(20) ]),
    
    
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
  validPressonne(e:string){
    if(parseInt(e) > 4){
      this.testLengthPr=true
      
    } 
    if(parseInt(e) < 4){
      this.testLengthPr=false
      
    } 
  }
  containerSwiperRooms:any

  suivant(){
    this.arriver=this.reservationChambreForm.get('date_arrive')?.value
    this.depart=this.reservationChambreForm.get('date_depart')?.value
    console.log(this.arriver , this.depart ,"bb")
    
    this.containerSwiperRooms = document.getElementById("containerSwiperRooms")
    this.roomListDispoContainer = document.getElementById("roomListDispoContainer")

    this.roomListDispoContainer.remove()

    var container = document.createElement("div")

    container.setAttribute("class","swiper-wrapper")
    container.id = "roomListDispoContainer"

    this.containerSwiperRooms.appendChild(container)

    this.tabSuitesDispo.map((room:any)=>{

      var slide = room.suite
      
      this.createRoomsDispoSlide(slide)

    })

    this.initRoomsDispoSlider()

  }

  register(){
      
    console.log(this.client_info.value ,"kkkk")
    console.log(this.arriver,this.depart,'eee')
    this.rooms_dispo_selected_items.forEach((item:any)=>{

      var reservation = {

        dateStart: this.arriver,
        dateFin: this.depart,
        nom: this.client_info.get('nom')?.value,
        prenom: this.client_info.get('prenom')?.value,
        tel: this.client_info.get('phone')?.value,
        nbr_personne: this.client_info.get('nbr_personne')?.value,
        room: item.title,
        price: item.price

      } 
       console.log(reservation,"reservation")

      this.helper.reservationEnligneAndSendEmail(reservation)

    })
    alert("reservation confirmé")

  }




  bannerPosts = [
    {
      img: "/assets/img/banner/dar-ic3.jpg",
      tag: 'The ultimate luxury experience',
      title: "Dar Ichkeul Le luxe et La nature",
    },
    {
      img: "/assets/img/banner/dar-ic2.jpg",
      tag: 'The ultimate luxury experience',
      title: "LÀ OÙ LA VIE EST PLUS DOUCE",
      
    },
  ];
  bannerBgImage = ""
  bannerTitle = ""
  settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    fade: true,
    arrows: false,
  };

  rooms_dispo_selected_items:any = []

  current_step_reserv_form = "step 1"

  dateDebutInput:any
  dateFinInput:any

  sliderReservClosed = false

  btnReserveHtmlValue = "<span>Réserver</span>"


  nextStepReservSlider(slidesContainer:any,btnSlide:any,closeFormBtn:any){

    if(this.rooms_dispo_selected_items.length > 0){

      if(this.current_step_reserv_form === "step 1"){

        slidesContainer.style.display = "none"
        btnSlide.style.display = "none"
        closeFormBtn.style.display = "none"
        this.current_step_reserv_form = "step 2"

      }else{

        this.current_step_reserv_form = "step 1"
        slidesContainer.style.display = "flex"
        closeFormBtn.style.display = "flex"
        btnSlide.style.display = "flex"

      }

    }

  }

  async  getDateDebutValue(date:any,dateInput:any){
    var i=0
    var j=0
  
   
    this.tabMax=[]
    this.tabSuitesDispo=[]
    var d = new Date(date.target.value+"")
    
    var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
    var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

    var date_final = [dt_Date, dt_Month, dt_Year].join('/')
    

    dateInput.value = date_final+""
    this.arriver=date_final+""
      console.log("date")
      console.log(date.target.value,'valueee')
      

    
       
      this.DateArr=new Date(date.target.value.setDate(date.target.value.getDate() + 1));
      console.log( this.DateArr,"date d'arriver")
        this.suites.forEach(async (ele)=>{
          console.log(ele,'ele de suite')
        
          var tab:any[]=[]
          tab=Array.prototype.concat.apply([], ele.history).map(ele=>new Date (ele.slice(0,10)).getTime()).sort((a , b) => a-b);
          var revSuites={
            suite:ele.suit,
            tabDate:tab
          }
          console.log(revSuites , j+1, "revSuites")
           var test =revSuites.tabDate.some(ele=>ele  > this.DateArr.getTime())
          if(test ==true){
            var rev=revSuites.tabDate.find(ele=>ele  > this.DateArr.getTime())
            console.log(ele,'kaka')
            var obj={
              suite:ele.suit,
              reservationMax:new Date(rev)
            }
            console.log(obj,'kikou')
           
          
             
            
             console.log( i=i+1,"crono")
             console.log(rev,"ooooo")
           await  this.tabMax.push(obj)

             
                                   
            
          } 
          if( test ==false) 
          {
            console.log(i,"crono2")
            
             var obj1={
              suite:ele.suit,
              reservationMax:new Date('12/12/2027')
            }      
           await  this.tabMax.push(obj1)
          }
  
           
          
         
        
         
        })
        console.log(this.tabMax,"fin")
        console.log(this.tabMax,"fin2")
        console.log(this.maxResvation,"aaa") 
        console.log(this.tabMax.sort((a ,  b) => b.reservationMax.getTime()  - a.reservationMax.getTime()  ),'desd')
       this.maxResvation=this.tabMax.sort((a ,  b) => b.reservationMax.getTime()  - a.reservationMax.getTime()  )[0].reservationMax
         console.log(this.maxResvation,'bbb')
     
   
      
   
    

     
  }

  getDateFinValue(e:any,dateInput:any){
    
    
    var d = new Date(e.target.value+"")
    
    var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
    var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

    var date_final = [dt_Date, dt_Month, dt_Year].join('/')
       
    dateInput.value = date_final+""
    this.depart=date_final+""
    this.tabSuitesDispo=this.tabMax.filter(ele=>ele.reservationMax.getTime() >= e.target.value.getTime())
     console.log(this.tabSuitesDispo)
  }


  counter_banner_spec = 1

  getBgBanner(index:any){

    this.bannerBgImage = "url('"+this.bannerPosts[index].img+"')"    

  }

  getTitleBanner(index:any){

    this.bannerTitle =  this.bannerPosts[index].title+""

  }


  overBtn(btn:any){

    btn.style.right = ""
    btn.style.left = "-1%"
    btn.style.width = "101.02%"
    btn.style.border = "1px solid white"

  }

  outBtn(btn:any){

    btn.style.left = ""  
    btn.style.right = "-1%"  
    btn.style.width = "0%"  
    setTimeout(()=>{
      btn.style.border = "none"  
    },350)

  }

  closeReservFormOpen(slider:any){

    slider.style.display = "none"

  }

  sliderReservFormOpen(slider:any){

    this.suivant()

    this.phoneScreen = window.matchMedia('(max-width: 700px)')

    if(this.phoneScreen.matches){
               console.log(this.reservationChambreFormMobile.get('date_depart_Mobile')?.value,555)
      slider.style.display = "block"

      this.btnReserveHtmlValue = "<span>Réserver</span>"

    }
    else{

      if(slider.style.height === "0%"){
        console.log(this.reservationChambreFormMobile.get('date_depart_Mobile')?.value,111)
        slider.style.height = "70%"
        this.btnReserveHtmlValue = "<i class='fa-solid fa-xmark'></i>"

      }else{

        slider.style.height = "0%"
        this.btnReserveHtmlValue = "<span>Réserver</span>"

      }

    }


  }

  sliderContainerBoxReservForm:any

  initSliderReservFormOpen(){

   
    this.sliderContainerBoxReservForm = document.getElementById("sliderContainerRoomsDispo")

    this.phoneScreen = window.matchMedia('(max-width: 700px)')

    if(this.phoneScreen.matches){

      this.sliderContainerBoxReservForm.style.display = "none"


    }else{

      this.sliderContainerBoxReservForm.style.height = "0%"
    }

  }

  
  initRoomsDispoSlider(){

    this.phoneScreen = window.matchMedia('(max-width: 700px)')

    var config;

    if(this.phoneScreen.matches === false){

      config = {
        slidesPerView: 3,
        spaceBetween: 20,
        loop:false,
        navigation:{

          nextEl:".btn-right",
          prevEl:".btn-left"

        }
      }
    }else{
      config = {
        spaceBetween: 0,
        //loop:false,
        //effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: false,
        slidesPerView: 1,
        navigation:{

          nextEl:".btn-right",
          prevEl:".btn-left"

        }
      }
    }

    new Swiper(".rooms-list-dispo",config)

  }

  roomListDispoContainer:any
  phoneScreen:any

  createRoomsDispoSlide(slide:any){

    this.roomListDispoContainer = document.getElementById("roomListDispoContainer")

    this.phoneScreen = window.matchMedia('(max-width: 700px)')

    var container = document.createElement("div")
    var room_cover_image = document.createElement("div")
    var btn_click_slide = document.createElement("div")
    var title_price = document.createElement("div")
    var description = document.createElement("div")
    var price = document.createElement("div")
    var radio_btn_reserv = document.createElement("div")
    var title = document.createElement("p")

    radio_btn_reserv.addEventListener("click",()=>{


      if(radio_btn_reserv.style.background === "transparent"){

        this.rooms_dispo_selected_items.push({id:slide.id,title:slide.title,price:slide.price})
        radio_btn_reserv.style.boxShadow = "inset 0 0 0.8vw 0 #0000009c"
        radio_btn_reserv.style.background = "#FF9800"

        console.log(this.rooms_dispo_selected_items)

      }
      else{

        radio_btn_reserv.style.boxShadow = "0 0 0 0 transparent"
        radio_btn_reserv.style.background = "transparent"

        for(let i=0; i < this.rooms_dispo_selected_items.length ; i++){

          if(this.rooms_dispo_selected_items[i].id === slide.id){

            this.rooms_dispo_selected_items.splice(i)
            

          }
        }

        console.log(this.rooms_dispo_selected_items)

      }


    })

    price.innerText = slide.price+" DT/"+slide.period

    description.innerHTML = slide.longdesc

    title.innerText = slide.title

    title_price.appendChild(title)

    container.setAttribute("class","swiper-slide")

    container.setAttribute("style",`

      width: 30%;
      height: 98%;
      background: white;
      box-shadow: 0 0 0.9vw 0 #00000038;
      position: relative;
      user-select: none;

    `)

    room_cover_image.setAttribute("style",`

      width: 100%;
      height: 50%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url('${slide.sliderimage[0]}');


    `)

    btn_click_slide.innerHTML = "<i class='fa-solid fa-eye'></i>"

    btn_click_slide.setAttribute("style",`

      width: 12%;
      height: 10%;
      background:  #00000094;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 2%;
      top: 38%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.3vw;
      transition: .3s;
      cursor: pointer;

    `)

    title_price.setAttribute("style",`

      width: 100%;
      padding: 4% 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.3vw;

    `)

    title.setAttribute("style",`

      color: #aa8453;
      font-size: 1.6vw;
      margin: 0;
      padding: 0 4%;


    `)

    description.setAttribute("style",`

      display: -webkit-box;
      padding-left: 4%;
      max-width: 92%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 2.3vw;
      color: #323232;
      font-size: 1vw;

    `)


    price.setAttribute("style",`

      position: absolute;
      top: 38%;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background: #FF9800;
      width: 35%;
      height: 12%;
      cursor: default;

    `)


    radio_btn_reserv.setAttribute("style",`

      width: 12%;
      padding: 4.9% 0;
      border: .2vw solid #FF9800;
      border-radius: 100vw;
      position: absolute;
      top: 4%;
      right: 4%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background:transparent;
    `)



    if(this.phoneScreen.matches){  

      container.setAttribute("style",`

        width: 80%;
        height: 98%;
        background: white;
        box-shadow: 0 0 0.9vw 0 #00000038;
        position: relative;
        user-select: none;

      `)

      title.setAttribute("style",`

        color: #aa8453;
        font-size: 23px;
        margin: 0;
        padding: 0 4%;


      `)

      description.setAttribute("style",`

        display: -webkit-box;
        padding-left: 4%;
        max-width: 92%;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 39px;
        color: #323232;
        font-size: 18px;

      `)

      radio_btn_reserv.setAttribute("style",`

        width: 10%;
        padding: 4.6% 0;
        border: 1px solid #FF9800;
        border-radius: 100vw;
        position: absolute;
        top: 4%;
        right: 4%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background:t transparent;

      `)

      btn_click_slide.setAttribute("style",`

        width: 12%;
        height: 10%;
        background:  #00000094;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 2%;
        top: 38%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
        transition: .3s;
        cursor: pointer;

      `)

    }

    container.appendChild(room_cover_image)
    container.appendChild(btn_click_slide)
    container.appendChild(title_price)
    container.appendChild(description)
    container.appendChild(price)
    container.appendChild(radio_btn_reserv)

    this.roomListDispoContainer.appendChild(container)



  }





  ngOnInit(): void {

    this.getTitleBanner(0)
    this.getBgBanner(0)

    setInterval(()=>{

      this.getTitleBanner(this.counter_banner_spec)
      this.getBgBanner(this.counter_banner_spec)
      this.counter_banner_spec++

      if(this.counter_banner_spec === this.bannerPosts.length){

        this.counter_banner_spec = 0

      }

    },5000)

    this.initSliderReservFormOpen()
    this.helper.getSingleSuiteToute().subscribe((res:any)=>{
      var newArray = Array.prototype.concat.apply([], res);
      newArray=newArray.map(ele=>ele.slice(0,10))
      this.tabDate=newArray
      console.log(this.tabDate,'1')
      this.helper.getAllSuites().subscribe(res=>{
        var obj:any
        obj=res
        this.suites=obj
        console.log(this.suites,"haboub")
        var k= 0
        this.helper.getAllResvation().subscribe((res:any)=>{
          var newArray = Array.prototype.concat.apply([], res);
          newArray=newArray.map(ele=>ele.slice(0,10))
          console.log(newArray ,'aaaa')
          for(let i = 0; i< newArray.length; i++){
           
            console.log(newArray[i])
            if(newArray.filter(ele=>ele === newArray[i]).length  ==this.suites.length ){
              k=k+1
              console.log(k,'ooo') 
              this.tabDate.push(newArray[i]) 
            }           
        }  
        console.log(this.tabDate,'2')  
      })
  
  
  
        
     })
    })
   
  
  }


}
