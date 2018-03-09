import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../utils/ajax';
// import { forEach } from '@angular/router/src/utils/collection';
import global from '../../utils/global';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({ 
    selector: 'app-menus',
    templateUrl: './menus.component.html',
    styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
    store: Object = global;

    menuType:Object;
    menuID:string = '002';
    menus:Object;
    hotMenus: Object;
    currentCate:Array<string> = ['hot'];
    qtys: any;
    qtyId:any=[];
    count:any;
    counts:any = [];
    userPhone: string = window.localStorage.getItem('telInfo');
    qtyRes: Object;
    private userInfo: string;
    
    constructor(private http: HttpService,private router:Router) { }

    ngOnInit() {
        var userInfo = window.localStorage.getItem('telInfo');
        
        
        this.http.get('menus.php', { state: 'getMenus'}).then((res) => {
            // console.log(res);
            this.menuType = res ;
            this.getMenuItem(this.menuID)
        })
        if (this.userPhone) {
            this.http.post('car.php', { state: 'getCar', userPhone: this.userPhone }).then((res) => {
                // console.log(res);
                this.qtys = res;
                // this.store['count'] = res['data2'][0]['row'];
                this.store['count'] = 0;
                this.store['TotalPrice'] = 0
                this.qtys.forEach(item =>{
                    this.qtyId.push(item.foodId)
                    this.counts.push(item.count);
                    this.store['count'] = item.count * 1 + this.store['count']*1;
                    this.store['TotalPrice'] += (item.count * 1) * (item.price * 1);
                    // console.log('aa',this.store['TotalPrice']);
                })
            })
        }
    }
    getMenuItem(eve){
        if (eve == 'hot'){
            this.http.get('menus.php', { state: 'getMenusHot'}).then((res) => {
              // console.log(res);
                this.menus = [];
                this.hotMenus = res;
            })
        } else {
            this.http.get('menus.php', { state: 'getMenusId', menuID: eve}).then((res) => {
                // console.log(res);
                this.menus = res;
                this.hotMenus = [];
                // this.store['TotalPrice'] = 
            })
        }
      
    }
    addQty(foodId,price){
        if (!this.userPhone) {
            document.getElementsByClassName('nono')[0].setAttribute('style', 'display:block');
            setTimeout(() => {
                this.router.navigate(['/login'])
            }, 2000);
        }else{
            // console.log('price', price)
            this.http.post('car.php', { state: 'addQty', foodId: foodId, userPhone: this.userPhone}).then((res) => {
                if (res == 'seccese'){
                    this.store['count']++;
                    this.store['TotalPrice'] += (price*1)
                    // console.log(res);
                    if (this.qtyId.indexOf(foodId)>-1){
                        this.counts[this.qtyId.indexOf(foodId)]=(this.counts[this.qtyId.indexOf(foodId)]*1)+1;
                        
                    } else {
                        this.qtyId.push(foodId);
                        this.counts[this.qtyId.indexOf(foodId)] = 1;
                    }
                }
            })
        }
    }
    subQty(foodId, price) {
        // this.qtys--;
        if (!this.userPhone) {
            document.getElementsByClassName('nono')[0].setAttribute('style', 'display:block');
            setTimeout(() => {
                this.router.navigate(['/login'])
            }, 2000);
        }else{
            this.http.post('car.php', { state: 'subQty', foodId: foodId, userPhone: this.userPhone }).then((res) => {
                if (res == 'seccese') {
                    // console.log(res);
                    this.store['count']--;
                    this.store['TotalPrice'] -= (price * 1)
                    if (this.qtyId.indexOf(foodId) > -1) {
                        if ((this.counts[this.qtyId.indexOf(foodId)] * 1) - 1 < 1) {

                            this.http.post('car.php', { state: 'delCarItem', foodId: foodId, userPhone: this.userPhone }).then((res) => {
                                this.counts.splice(this.qtyId.indexOf(foodId), 1);
                                this.qtyId.splice(this.qtyId.indexOf(foodId), 1);
                            })
                        } else {
                            this.counts[this.qtyId.indexOf(foodId)] = (this.counts[this.qtyId.indexOf(foodId)] * 1) - 1;

                        }

                    }
                }
            })
        }
    }
}
