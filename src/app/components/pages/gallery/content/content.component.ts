import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../../services/helper.service';
import piscine from '../../../data/piscine.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends HelperService implements OnInit {
  public piscine = piscine;
  constructor(public HelperService: HelperService) {
    super()
  }

  ngOnInit(): void {
  }

}
