import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-product-seller',
  templateUrl: './product-seller.component.html',
  styleUrls: ['./product-seller.component.css']
})
export class ProductSellerComponent implements OnInit {
  private seluser:string;
  constructor(private routeInfo: ActivatedRoute, private router:Router ) { }

  ngOnInit() {
    // this.seluser = this.routeInfo.snapshot.queryParams['username'];
    this.routeInfo.params.subscribe((params:Params)=>this.seluser = params['username']);
    console.log(this.seluser,'6666')
  }
}
