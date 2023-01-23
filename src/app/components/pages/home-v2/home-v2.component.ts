import { Component, OnInit, Renderer2} from '@angular/core';


@Component({
  selector: 'app-home-v2',
  templateUrl: './home-v2.component.html',
  styleUrls: ['./home-v2.component.css']
})
export class HomeV2Component implements OnInit {


  public sections = 4;

  public  scroll = 0;

  public selected = false;


  constructor(private renderer:Renderer2) { }
  // Footer style
  classname = "";
  ftlogo = "assets/img/footer-logo.png"

  ngOnInit(): void {

    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY / this.sections);
    })

  }

}
