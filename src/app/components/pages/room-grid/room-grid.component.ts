import { Component, OnInit } from '@angular/core';
import * as  AOS from 'aos';
import Swiper from "swiper";
import { RoomHelperService } from 'src/app/components/services/room-helper.service';



@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.css']
})
export class RoomGridComponent implements OnInit {

  constructor(public suites:RoomHelperService) {

    AOS.init();

  }

  horizontal_Suites:any = this.suites.rooms.slice(0,3)
  horizontal_Suites2:any = this.suites.rooms.slice(3,6)
  horizontal_Suites3:any = this.suites.rooms.slice(6,8)

  cover_restau_page_images = [
    {
        "id": 1,
        "img": "assets/img/photos_new_content/les_salons/IMG_6891.jpg"
       
    },
    {
        "id": 2,
        "img": "assets/img/photos_new_content/les_salons/169046606_740309813350245_1233950860878165254_n.jpg"
    },
    {
      "id": 3,
      "img":"assets/img/assets/photos_new_content/les_salons/169123192_740311870016706_1645887951205821900_n.jpg"
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


  Headerclassname = "inner-page";

  ngOnInit(): void {

    this.cover_restau_page_images.map((img:any)=>{

      this.createCoverSliderRestau(img)

    })

  }

}
