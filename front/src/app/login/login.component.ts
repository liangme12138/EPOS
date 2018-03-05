import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private telphone:number;
  private password:string;
  constructor(private routeInfo: ActivatedRoute) { }
  
  ngOnInit() {

  }

}
