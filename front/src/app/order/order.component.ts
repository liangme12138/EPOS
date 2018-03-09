import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../utils/ajax';
import { Utils } from '../../utils/dateFormat';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    userPhone: string = window.localStorage.getItem('telInfo');
    orderItem:any;
    orders: any;
    totle:number;
    routerState:boolean;
    foodPrice:number=0;
    
    constructor(private http: HttpService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        if (this.router.url =='/home/order'){
            this.routerState = true;
        } else if (this.router.url =='/order'){
            this.routerState = false;
        }
        // console.log('router', this.router.url)
        this.getOrder('getOrder')
    }
    filterData(_val) {
        // console.log(_val)
        return Utils.dateFormat(new Date(_val), "yyyy-MM-dd mm:hh:ss")
    }
    getOrder(status){
        this.http.post('order.php', { state: status, userPhone: this.userPhone }).then((res) => {
            // console.log(res);
            this.orderItem = res['data1'];
            this.orders = res['data2'];
        })
    }
    toPayment(orderId){
        
        this.orderItem.forEach(item=>{
            // console.log(orderId);
            if (orderId == item.orderId){
                this.foodPrice = (item.price * 1) + this.foodPrice;
            }
        })
        // console.log(this.foodPrice)
        this.router.navigate(['/pay', orderId,this.foodPrice])
    }
    Again(){
        this.router.navigate(['/home/menus'])
    }
    delOrder(orderId){
        console.log(orderId);
        this.http.post('order.php', { state: 'delOrder', userPhone: this.userPhone, orderId: orderId }).then((res) => {
            // console.log(res);
            this.getOrder('getOrder')
        })
    }
}
