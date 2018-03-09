import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../utils/ajax';
import global from '../../utils/global';
import { Router, ActivatedRoute, ParamMap, Params} from '@angular/router';

@Component({
    selector: 'app-confirm-order',
    templateUrl: './confirm-order.component.html',
    styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
    userPhone: string = window.localStorage.getItem('telInfo');
    orderData:any;
    private orderInfo:any;
    foodsId:any=[];
    counts:any=[];
    // totle:number;
    store: Object = global;
    constructor(private http: HttpService, private routeInfo: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.http.post('car.php', { state: 'getCar', userPhone: this.userPhone }).then((res) => {
            // console.log(res);
            this.orderData = res;
            this.store['count1'] = 0;
            this.store['totle'] = 0
            this.orderData.forEach(item=>{

                this.foodsId.push(item.foodId);
                this.counts.push(item.count);
                this.store['totle'] += (item.count * 1) * (item.price * 1);
                this.store['count1'] = item.count * 1 + this.store['count1'] * 1;
            })
            // console.log(this.store['count1'])
        })
        this.routeInfo.params.subscribe((params) => console.log(params));
    }
    affirm(){
        var timestamp = new Date().getTime();
        // console.log(this.foodsId, this.counts)
        // console.log(this.userPhone);
        
        this.http.post('order.php', { state: 'addOrder', userPhone: this.userPhone, orderId: timestamp, foodsId: this.foodsId, counts: this.counts}).then((res) => {
            // console.log(res);
            if (res == 'ok'){
                this.router.navigate(['/pay', timestamp, this.store['totle']]);
                this.http.post('car.php', { state: 'emptyCart', userPhone: this.userPhone }).then((res) => {
                    // console.log(res);
                })
            }
        })
        
    }

}
