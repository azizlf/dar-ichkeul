import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-wrap',
  templateUrl: './video-wrap.component.html',
  styleUrls: ['./video-wrap.component.css']
})
export class VideoWrapComponent implements OnInit {


  
  constructor() {
  }

  element:any
  playBtn:any

  ngOnInit(): void {
  
    this.element = document.getElementById('videoAutoPlay')
    this.playBtn = document.getElementById('playBtn')

    window.addEventListener('scroll', ()=>{

        var video = this.element;

        var fraction = 0.8

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w,
        
        b = y + h,
        
        visibleX, visibleY, visible;

        visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
        
        visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

        visible = visibleX * visibleY / (w * h);

        if (visible > fraction) {
          video.style.opacity = 1
          video.controls = "true"
          video.play()
          this.playBtn.style.display = "none"
        } else {
          video.style.opacity = 0
          video.controls = "false"
          video.pause()
          this.playBtn.style.display = "block"

        }

      }, 
    false);

    window.scrollBy({
      top: 10,
      behavior : "smooth"
    })

  }

 


}
