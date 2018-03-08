import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  orderNum: string;
  payMoney: string;

  constructor(private routeInfo:ActivatedRoute,private router:Router) { }

  ngOnInit() {
      this.routeInfo.params.subscribe((params) => {
        this.orderNum = params['orderNum'];
        this.payMoney = params['payMoney'];
      });
      // this.routeInfo.params.subscribe((params:Params)=>this.orderNum = params['id']);
      // this.routeInfo.params.subscribe((params:Params)=>this.payMoney = params['id']);
  }

  affirm(){
        
        // this.router.navigate(['/'])
    }

}
