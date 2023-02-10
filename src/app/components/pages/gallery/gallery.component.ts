import { Component, OnInit } from '@angular/core';
import * as  AOS from 'aos';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { 

    AOS.init();

  }

  actsList:any = [

    {
      title:"RESTAURANT",
      image:"https://d1vp8nomjxwyf1.cloudfront.net/wp-content/uploads/sites/364/2021/04/01101407/Restaurant-HotelGRandAmour-%40PionPhotographie-4.jpg",
      description:"Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"left"
    },
    {
      title:"PISCINE",
      image:"https://tunisie.co/uploads/images/content/trt-210622-1.jpg",
      description:"Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"right"

    },
    {
      title:"EQUITATION",
      image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      description:"Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"left"

    },
    {
      title:"TENNIS",
      image:"assets/img/aboutcarousel/03.jpg",
      description:"Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"right"

    },
    {
      title:"RANDONNÉE",
      image:"https://www.fribourgregion.ch/wp-content/uploads/2022/03/randonnee_hb.jpg",
      description:"Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"left"

    }

  ]

  ngOnInit(): void {
  }

}
