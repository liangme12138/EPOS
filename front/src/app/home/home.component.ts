import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import global from '../../utils/global'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  store: Object = global;
  constructor(private routeInfo:ActivatedRoute,private router:Router) { }

  ngOnInit() {

  }
  toProduct(){
    this.router.navigate(['/product',2]);
  }
  toCart(){
    this.router.navigate(['/cart',10])
  }
}
