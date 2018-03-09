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
  private errorInfo:string='';
  constructor(private routeInfo:ActivatedRoute,private http:HttpService,private router:Router) { }

  ngOnInit() {

  }
  telReg(){
    var telVal = this.tel;
    var telReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!telVal) {
      document.getElementsByClassName('ero')[0].setAttribute('style', 'display:none');
      return false;
    } else if(!telReg.test(telVal)) {
      this.errorInfo = '手机号输入有误!';
      document.getElementsByClassName('ero')[0].setAttribute('style', 'display:block');
      setTimeout(()=>{
        document.getElementsByClassName('ero')[0].setAttribute('style', 'display:none')
      },2000);
      // return false;
    }else{
      this.http.get('reg.php',{
        telVal:telVal
      }).then((res)=>{
        // console.log(res)
        if(res === true){
          this.errorInfo = '此用户已存在!';
          document.getElementsByClassName('ero')[0].setAttribute('style', 'display:block');
          setTimeout(() => {
            document.getElementsByClassName('ero')[0].setAttribute('style', 'display:none');
          }, 2000);
          // alert('此用户已存在')
          // return false;
        }else{
          // alert('此用户可用')
          this.errorInfo = '此用户可用!';
          document.getElementsByClassName('ero')[0].setAttribute('style', 'display:block');
          setTimeout(() => {
            document.getElementsByClassName('ero')[0].setAttribute('style', 'display:none');
          }, 2000);
          return false;
        }
      })
    }
    // console.log(telVal)    
  }
  pwdReg(){
    console.log(this.pwd)
    var pwdVal = this.pwd;
    if (!pwdVal) {
      return false;
    }else{
      // console.log(pwdVal)
    }
  }
  pwdRegCon(){
    var pwdConVal = this.pwdCon;
    // console.log(this.pwd,'33')
    // console.log(pwdConVal,'444')
    
    if (!pwdConVal) {
      return false;
    }else if (pwdConVal !== this.pwd){
      this.errorInfo = '密码输入不一致!';
      document.getElementsByClassName('ero')[0].setAttribute('style', 'display:block');
      setTimeout(() => {
        document.getElementsByClassName('ero')[0].setAttribute('style', 'display:none');
      }, 2000);
      // alert('密码输入不一致');
    }else{
      return;
    }
  }
  toReg(){
    var telVal = this.tel;
    var pwdVal = this.pwd;
    var pwdConVal = this.pwdCon;
    if (!telVal || !pwdVal || !pwdConVal) {
      // alert('注册信息有误')
      this.errorInfo = '注册信息有误!';
      document.getElementsByClassName('ero')[0].setAttribute('style', 'display:block');
      setTimeout(() => {
        document.getElementsByClassName('ero')[0].setAttribute('style', 'display:none');
      }, 2000);
      // return false;
    } else {
      this.http.get('reg1.php', {
        telVal: telVal,
        pwdVal: pwdVal
      }).then((res) => {
        console.log(res)
        if (res === 'regOk'){
          // alert('注册成功')
          this.errorInfo = '注册成功!';
          document.getElementsByClassName('ero')[0].setAttribute('style', 'display:block');
          setTimeout(() => {
            document.getElementsByClassName('ero')[0].setAttribute('style', 'display:none');
          }, 2000);
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
