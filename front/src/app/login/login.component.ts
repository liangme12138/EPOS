import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { HttpService } from '../../utils/ajax';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private tel:string;
  private pwd:string;
  constructor(private routeInfo: ActivatedRoute, private http: HttpService,private router:Router) { }
  
  ngOnInit() {
    
  }
  toLogin() {
    var telVal = this.tel;
    var pwdVal = this.pwd;
    if (!telVal || !pwdVal){
      console.log('登录信息有误！')
      return false;
    }else {
      this.http.get('login.php',{
        telVal:telVal,
        pwdVal: pwdVal
      }).then((res)=>{
        console.log(res)
        if(res === 'fail'){
          alert('用户不存在');
          return false;
        } else if (res === 'loginfail'){
          alert('密码有误!');
          return false;
        } else if (res === 'loginsuccess'){
          this.router.navigate(['/home/menus'])
        }
      })
    }
    
  }

  telBtn(){
    var telVal = this.tel;
    var telReg = /^[1][3,4,5,7,8][0-9]{9}$/;

    if(!telVal){
      return false;
    } else if (!telReg.test(telVal)){
      alert('手机号输入有误!')
      return false;
    }
  }
  pwdBtn(){
    var pwdVal = this.pwd;
    if(!pwdVal){
      return false;
    }
  }

}
