import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { HttpService } from '../../utils/ajax';
@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  constructor(private router: Router, private routeInfo: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    
  }
  toDiscount(){
    this.router.navigate(['discount'])
  }

}
