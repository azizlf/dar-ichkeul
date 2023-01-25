import { Component, OnInit } from '@angular/core';
import * as  AOS from 'aos';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor() { 

    AOS.init({duration: 3000});

  }

  ngOnInit(): void {
  }

}
