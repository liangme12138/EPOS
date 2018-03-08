import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { HttpService } from '../../utils/ajax';
import { ElMessageService } from 'element-angular';
@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  private userInfo:string;
  constructor(
    private router: Router, 
    private routeInfo: ActivatedRoute, 
    private http: HttpService,
    private message: ElMessageService
  ) { }

  ngOnInit() {
    this.userInfo = window.localStorage.getItem('telInfo');
    // console.log(this.userInfo,'8888')
    if (!this.userInfo) {
      this.userInfo = '吃货留步，请登录'
    }
  }
  toDiscount(){
    this.router.navigate(['discount'])
  }
  handle(type: string): void {
    this.message[type]('成功退出账户');
    window.localStorage.clear();
    this.userInfo = '吃货留步，请登录'
    
  }
  

}
