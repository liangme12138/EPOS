import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../utils/common.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  user: string ;
  // showId: boolean = true;
  constructor( private common: CommonService, private routeInfo: ActivatedRoute, private router: Router ) { }

  ngOnInit ()
  {
    // 获取身份
    if ( !localStorage.getItem( 'identify' ) ) {
      this.router.navigate( [''] );
    }else{
      this.user = localStorage.getItem( 'userName' );
      // if ( localStorage.getItem( 'identify' ) == "管理员"){
      //   this.showId = true;
      // }else{
      //   this.showId = false;
      // }
    }
  }
  showModal = () =>
  {
    this.isVisible = true;
  };

  handleOk = ( e ) =>
  {
    this.isConfirmLoading = true;
    setTimeout( () =>
    {
      this.isVisible = false;
      this.isConfirmLoading = false;
      localStorage.clear();
      this.router.navigate( [''] );
    }, 1000 );
  };

  handleCancel = ( e ) =>
  {
    this.isVisible = false;
  };
}

