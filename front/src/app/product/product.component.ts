import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId:number;
  constructor(private routeInfo:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params:Params)=>this.productId = params['id']);
  }
  toHome(){
    this.router.navigate(['/home'])
  }
  toDesc() {
    this.router.navigate(['desc',7],{relativeTo:this.routeInfo})
  }
  toSeller() {
    this.router.navigate(['seller','zcy'],{relativeTo:this.routeInfo})
  }

}
