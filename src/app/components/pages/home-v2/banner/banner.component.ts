import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

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

  dateDebutInput:any
  dateFinInput:any

  getDateDebutValue(e:any,dateInput:any){

    var date = Date.parse(e.target.value+"")
    
    var d = new Date(e.target.value+"")
    
    var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
    var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

    var date_final = [dt_Date, dt_Month, dt_Year].join('/')

    dateInput.value = date_final+""

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

  }

}
