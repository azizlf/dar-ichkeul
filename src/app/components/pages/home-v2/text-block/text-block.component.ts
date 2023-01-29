import { Component, OnInit } from '@angular/core';
import * as  AOS from 'aos';


@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.css']
})
export class TextBlockComponent implements OnInit {


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

  initRoomsList(){

    for(let i=0 ; i < this.rooms.length ; i++){

      if(i <= 2){

        this.vertical_items.push(this.rooms[i])

      }else{

        this.horizontal_items.push(this.rooms[i])

      }

    }

  }


  constructor() { 

    AOS.init();

  }

  ngOnInit(): void {

    this.initRoomsList()

  }

}
