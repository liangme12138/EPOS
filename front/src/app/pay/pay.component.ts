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
    userPhone: string = window.localStorage.getItem('telInfo');
    userInfo:string;
    store: Object = global;
    constructor(private http: HttpService,private routeInfo:ActivatedRoute,private router:Router) { }

    ngOnInit() {
        this.routeInfo.params.subscribe((params) => {
          this.orderNum = params['orderNum'];
          this.payMoney = params['payMoney'];
        });
        // this.routeInfo.params.subscribe((params:Params)=>this.orderNum = params['id']);
        // this.routeInfo.params.subscribe((params:Params)=>this.payMoney = params['id']);
        // console.log(userInfo,'6666')
    }

    affirm(){
        // console.log(666)
        var userInfo = window.localStorage.getItem('telInfo');
        if (!userInfo){
            document.getElementsByClassName('nono')[0].setAttribute('style','display:block');
            setTimeout(() => {
                this.router.navigate(['/login'])
            }, 3000);
        }else{
            // this.http.post('order.php', { state: 'updateOrderStatus', userPhone: this.userPhone,orderId:this.orderNum }).then((res) => {
            // // console.log(res);
            //     this.router.navigate(['/order'])
            // })
            // console.log(666)
            var wthis = this;
            this.http.post('order.php', { state: 'updateOrderStatus', userPhone: this.userPhone, orderId: this.orderNum }).then((res) => {
                // console.log(res['data1']);
                var dataset = res['data1'];
                // var foodName=[];
                // this.dataset.forEach(item=>{
                //     foodName.push(item.foodName)
                // })
                //打印小票模板
                function receipt(dataset) {
                    var cont = `阿婆私房菜  \n*********************************\n名称           金额           数量\n`;
                    // var time = new Date();
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    var hour = date.getHours();
                    var minute = date.getMinutes();
                    var second = date.getSeconds();
                    var time = year + '/' + month + '/' + day + '/ ' + hour + ':' + minute + ':' + second;
                    dataset.forEach(function (item, idx) {
                        cont += `${item.foodName}      ${item.price}        ${item.count}\n`
                    });
                    cont += `总数量: ${wthis.store['count1']}件\n总金额：${wthis.store['totle']}元\n用户:${wthis.userPhone}\n买单时间：${time}\n*************************************\n`;
                    return cont;

                }
                var obj = receipt(dataset);
                console.log(obj)
                this.http.post('http://10.3.132.40:81/print', { text: obj }).then(res => {
                    // console.log(res)
                })
                this.router.navigate(['/order']);

            })
        }
       
    }
    cancel(){
        this.router.navigate(['/order'])
    }

}
