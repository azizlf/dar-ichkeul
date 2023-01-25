import { Component, OnInit ,  Renderer2} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private breadcrumbService: BreadcrumbService,private renderer:Renderer2) {
  }

  public sections = 4;

  public  scroll = 0;

  public selected = false;

  sideBarLeft = "-100%"

  sideBarOC(condition:boolean){

    if(!condition){

        this.sideBarLeft = "-100%"

    }else{

        this.sideBarLeft = "0%"

    }


  }


  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
      this.titleService.setTitle(this.createTitle(crumbs));
    });

    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY / this.sections);
    })
  }
  onActivate(_event:any){
    window.scroll(0,0);
  }
  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'Dar Ichkeul';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
   // return `${title}${routeTitle}`;
    return `${title}`;
  }

  private titlesToString(titles: any[]) {
    return titles.reduce((prev, curr) => {
      return `${prev} | ${curr.displayName}`;
    }, '');
  }
}
