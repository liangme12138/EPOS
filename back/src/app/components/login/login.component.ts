import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../utils/ajax'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  isLoadingOne = false;
  show: boolean = false;
  disableds: boolean = false;

	constructor( private fb: FormBuilder, private http: HttpService, private routeInfo: ActivatedRoute, private router: Router )
  {
  }

	ngOnInit ()
	{
		this.validateForm = this.fb.group( {
			userName: [null, [Validators.required]],
			password: [null, [Validators.required]],
			remember: [true],
		} );
		// 获取身份
		if ( localStorage.getItem( 'identify' )){
			this.router.navigate( ['index/product'] );
		}
	}

	loadOne = (  ) =>
	{
		this.isLoadingOne = true;
		this.disableds = true;
		setTimeout( _ =>
		{
			this.isLoadingOne = false;
			let userName;
			let password;
			for ( const i in this.validateForm.controls ) {
				this.validateForm.controls[i].markAsDirty();
			}
			userName = this.validateForm.controls.userName.value;
			password = this.validateForm.controls.password.value;
			if ( userName && password && this.isLoadingOne == false ) {
				let pageParams = {};
				pageParams['userName'] = userName;
				pageParams['password'] = password;
				this.http.get( 'back/login.php', pageParams ).then( res =>
				{
					console.log( res )
					if (res != false) {
						localStorage.setItem( 'identify', res[0].identify );
						localStorage.setItem( 'userName', res[0].userName );
						this.router.navigate( ['index/product'] );
					}else{
						this.show = true;
						this.disableds = false;
					}
				} )
			}
		}, 2000 );
	};
	
  _submitForm ()
  {
	this.loadOne();
    
  }


  
  

}
