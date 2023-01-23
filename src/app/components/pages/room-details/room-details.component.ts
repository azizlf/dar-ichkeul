import { Component, OnInit } from '@angular/core';
import { RoomHelperService } from '../../services/room-helper.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  constructor(private service: RoomHelperService) { }
  // Header style
  Headerclassname = "inner-page";

  ngOnInit(): void {
   // console.log("router data >>>",history)
  }



 /* getRoom(){
    this.service.setRoom(2).subscribe((data:any) => {
       console.log(data);
       
    })
  }*/
}
