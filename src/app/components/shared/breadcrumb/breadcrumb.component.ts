import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }
  @Input() childMessage: any;
  imgUrl: any;
  ready:boolean = false
  ngOnInit(): void {

    /**console.log("child message breadcrumb>>>", this.childMessage.listimage);
    this.childMessage.listimage = this.imgUrl;
    this.ready = true
    console.log(this.ready);**/
    

  }

  getUrl()
{
    this.ready = true
    setTimeout(() => {
      return 'url(this.imgUrl)';
  }, 2000);
  

}


}
