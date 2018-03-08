import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { HttpService } from '../../utils/ajax';
import global from '../../utils/global';
@Component({
    selector: 'pay',
    templateUrl: './pay.component.html',
    styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

    orderNum: string;
    payMoney: string;
    userPhone: string = '1111';
    constructor(private http: HttpService,private routeInfo:ActivatedRoute,private router:Router) { }

    ngOnInit() {
        this.routeInfo.params.subscribe((params) => {
          this.orderNum = params['orderNum'];
          this.payMoney = params['payMoney'];
        });
        // this.routeInfo.params.subscribe((params:Params)=>this.orderNum = params['id']);
        // this.routeInfo.params.subscribe((params:Params)=>this.payMoney = params['id']);
    }

    affirm(){
        console.log(666)
        this.http.post('order.php', { state: 'updateOrderStatus', userPhone: this.userPhone, orderId:this.orderNum }).then((res) => {
            // console.log(res);
            this.router.navigate(['/order'])
        })
    }
    cancel(){
        this.router.navigate(['/order'])
    }

}
