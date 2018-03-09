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

  private userInfo: string = window.localStorage.getItem('telInfo');
  constructor(
    private router: Router, 
    private routeInfo: ActivatedRoute, 
    private http: HttpService,
    private message: ElMessageService
  ) { }

  ngOnInit() {
   
    // console.log(this.userInfo,'8888')
    if (!this.userInfo) {
      this.userInfo = '吃货留步，请登录'
    }
  }
  toDiscount(){
    this.router.navigate(['discount'])
  }
  handle(type: string): void {
    if (this.userInfo === '吃货留步，请登录'){
      this.message[type]('请先登录，好吗？');
    }else{
      window.localStorage.clear();
      this.message['success']('退出成功，下次再来!');
      this.userInfo = '吃货留步，请登录';
    }
  }
  // handle(){
  //   if (!this.userInfo){
  //     // confirm('确定退出吗？')
  //     return false;
  //   }else{
  //     confirm('确定退出吗？')
  //   }
  // }
  handleBack(){
    // console.log(this.userInfo)
    if (this.userInfo =='吃货留步，请登录'){
      this.router.navigate(['/login'])
    }else{
      return false;
    }
  }
  

}
