import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  private tel:string;
  private pwd:string;
  constructor(private routeInfo: ActivatedRoute,private http: Http) { }
  
  ngOnInit() {

  }
  toLogin() {
    var telVal = this.tel;
    var pwdVal = this.pwd;
    if (!telVal || !pwdVal){
      console.log('登录信息有误！')
      return false;
    }else {

    }
    
  }

  telBtn(){
    var telVal = this.tel;
    var telReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if(!telReg.test(telVal)){
      alert('手机号输入有误!')
      return false;
    }
  }
  pwdBtn(){
    var pwdVal = this.pwd;
  }

}
