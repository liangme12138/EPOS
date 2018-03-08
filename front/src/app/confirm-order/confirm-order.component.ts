import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../utils/ajax';
import global from '../../utils/global';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-confirm-order',
    templateUrl: './confirm-order.component.html',
    styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
    userPhone: string = '1111';
    orderData:any;
    // totle:number;
    store: Object = global;
    constructor(private http: HttpService, private routeInfo: ActivatedRoute, private router: Router,) { }

    ngOnInit() {
        this.http.post('car.php', { state: 'getCar', userPhone: this.userPhone }).then((res) => {
            console.log(res);
            this.orderData = res;
            this.store['count1'] = 0;
            this.store['totle'] = 0
            this.orderData.forEach(item=>{
                this.store['totle'] += (item.count * 1) * (item.price * 1);
                this.store['count1'] = item.count * 1 + this.store['count1'] * 1;
            })
            console.log(this.store['count1'])
        })
    }
    affirm(){
        var timestamp = new Date().getTime();
        console.log(timestamp);
        this.router.navigate(['pay', timestamp, this.store['totle']])
    }

}
