import { Component, OnInit } from '@angular/core';
import { CommonService} from '../../utils/common.service'
@Component({
  selector: 'warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  constructor(private common: CommonService) { }

  ngOnInit() {
  }

}
