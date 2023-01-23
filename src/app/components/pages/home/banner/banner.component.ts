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
      id:1,
      img: "assets/img/banner/01.jpg",
    },
    {
      id:2,
      img: "assets/img/banner/02.jpg",
    }
  ];
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
  };

  ngOnInit(): void {
  }

}
