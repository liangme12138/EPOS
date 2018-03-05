import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  private telphone:number;
  private password:string;
  constructor(private routeInfo:ActivatedRoute) { }
  
  ngOnInit() {

  }

}
