import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { HttpService } from '../../utils/ajax';

@Component({
  selector: 'app-nouse',
  templateUrl: './nouse.component.html',
  styleUrls: ['./nouse.component.css']
})
export class NouseComponent implements OnInit {
  private data:Object;
  constructor(private router: Router, private routerInfo: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.http.get('discount.php').then((res)=>{
      this.data = res;
      // console.log(this.data)
      
    })
  }
  

}
