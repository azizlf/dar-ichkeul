import { Component, OnInit } from '@angular/core';
import equitation from '../../../../app/components/data/equitation.json';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  public equitation = equitation;
  constructor() { }
  // Header style
  Headerclassname = "inner-page";

  ngOnInit(): void {
  }

}
