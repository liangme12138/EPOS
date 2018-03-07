import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';


@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor(private router: Router, private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    
  }
  toUsed(){
    this.router.navigate(['used'],{relativeTo:this.routerInfo})
  }
  toNouse() {
    this.router.navigate(['nouse'], { relativeTo: this.routerInfo })
  }
  toTimeout(){
    this.router.navigate(['timeout'],{relativeTo:this.routerInfo})
  }
  

}
