import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../utils/common.service';
@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  user: string = "hahahh";
  constructor( private common: CommonService) { }

  ngOnInit ()
  {
     
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

    }, 1000 );
  };

  handleCancel = ( e ) =>
  {
    this.isVisible = false;
  };
}

