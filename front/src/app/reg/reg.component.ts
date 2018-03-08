import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { HttpService } from '../../utils/ajax';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  private tel:string;
  private pwdCon:string;
  private pwd:string;
  private pwdVal:string;
  constructor(private routeInfo:ActivatedRoute,private http:HttpService,private router:Router) { }

  ngOnInit() {

  }
  telReg(){
    var telVal = this.tel;
    var telReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!telVal) {
      return false;
    } else if(!telReg.test(telVal)) {
      alert('手机号输入有误!')
      return false;
    }else{
      this.http.get('reg.php',{
        telVal:telVal
      }).then((res)=>{
        // console.log(res)
        if(res === true){
          alert('此用户已存在')
          return false;
        }else{
          alert('此用户可用')
          return false;
        }
      })
    }
    // console.log(telVal)    
  }
  pwdReg(){
    var pwdVal = this.pwd;
    if (!pwdVal) {
      return false;
    }
    // console.log(pwdVal)
  }
  pwdRegCon(){
    var pwdConVal = this.pwdCon;
    // console.log(this.pwdVal,'33')
    // console.log(pwdConVal,'444')
    
    if (!pwdConVal) {
      return false;
    }else if (pwdConVal !== this.pwdVal){
      // alert('密码输入不一致');
      return false;
    }else{
      return;
    }
  }
  toReg(){
    var telVal = this.tel;
    var pwdVal = this.pwd;
    var pwdConVal = this.pwdCon;
    if (!telVal || !pwdVal || !pwdConVal) {
      alert('注册信息有误')
      return false;
    } else {
      this.http.get('reg1.php', {
        telVal: telVal,
        pwdVal: pwdVal
      }).then((res) => {
        console.log(res)
        if (res === 'regOk'){
          alert('注册成功')
          this.router.navigate(['/login']);
        }else{
          alert('注册失败,请稍后再试')
          return false;
          
        }
      })
    }
    // console.log(666)
    
  }
  backLogin(){
    this.router.navigate(['/login'])
  }

}
