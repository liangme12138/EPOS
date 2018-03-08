import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { HttpService } from '../../utils/ajax';
@Component({
  selector: 'app-used',
  templateUrl: './used.component.html',
  styleUrls: ['./used.component.css']
})
export class UsedComponent implements OnInit {
  private data:Object;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('discount.php').then((res)=>{
      this.data = res;
    })
  }

}
