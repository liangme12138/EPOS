import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import global from '../../utils/global';
import { ElMessageService } from 'element-angular'
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    store: Object = global;
    constructor(private routeInfo: ActivatedRoute, private router: Router, private message: ElMessageService) { }

    ngOnInit() {

    }
    toProduct(){
        this.router.navigate(['/product',2]);
    }
    toCart(){
        this.router.navigate(['/cart',10])
    }
    toCheckOrder(){
        console.log(this.store['count'])
        if (this.store['count'] < 1){
            this.handle2('error');
        } else {
            this.router.navigate(['/confirmorder']);
        }
    }
    handle2(type: string): void {
        this.message.setOptions({ showClose: true })
        this.message[type]('请选择商品')
    }
}
