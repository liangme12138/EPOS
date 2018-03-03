import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.css']
})
export class ProductDescComponent implements OnInit {
  private descId:number;
  constructor(private routeInfo: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params:Params)=>this.descId = params['descid'])
  }

}
