import { Component, OnInit } from '@angular/core';
import gallery from '../../../../app/components/data/gallery.json';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public gallery = gallery;
  constructor() { }
  // Header style
  Headerclassname = "inner-page";

  ngOnInit(): void {
  }

}
