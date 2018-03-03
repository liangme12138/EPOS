import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../utils/common.service';
@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor( private common: CommonService) { }

  ngOnInit() {
  }

}
