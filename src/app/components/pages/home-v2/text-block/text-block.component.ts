import { Component, OnInit } from '@angular/core';
import * as  AOS from 'aos';


@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.css']
})
export class TextBlockComponent implements OnInit {

  constructor() { 

    AOS.init();

  }

  ngOnInit(): void {
  }

}
