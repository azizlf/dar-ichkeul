import { Component, OnInit } from '@angular/core';
import * as  AOS from 'aos';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  bannerPosts = [
    {
      img: "assets/img/banner/04.jpg",
      tag: 'The ultimate luxury experience',
      title: "<p>LÀ OÙ LA VIE EST PLUS DOUCE</p>",
    },
    {
      img: "assets/img/banner/05.jpg",
      tag: 'The ultimate luxury experience',
      title: "<p>LÀ OÙ LA VIE EST PLUS DOUCE</p>",
      
    },
  ];

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

  getDateDebutValue(e:any){

    this.dateDebutInput = document.getElementById("dateDebut")

    var date = Date.parse(e.target.value+"")
    
    var d = new Date(e.target.value+"")
    
    var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
    var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

    var date_final = [dt_Date, dt_Month, dt_Year].join('/')

    this.dateDebutInput.value = date_final+""

  }

  getDateFinValue(e:any){

    this.dateFinInput = document.getElementById("dateFin")

    var date = Date.parse(e.target.value+"")
    
    var d = new Date(e.target.value+"")
    
    var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
    var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

    var date_final = [dt_Date, dt_Month, dt_Year].join('/')

    this.dateFinInput.value = date_final+""

  }

  ngOnInit(): void {

    AOS.init();
    AOS.refresh();

  }

}
