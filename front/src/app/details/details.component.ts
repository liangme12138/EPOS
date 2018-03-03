import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private detailsId:number;
  private detailsName:string;
  private detailsAge:number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.detailsId = this.routeInfo.snapshot.queryParams['id'];
    this.detailsName = this.routeInfo.snapshot.queryParams['name'];
    this.detailsAge = this.routeInfo.snapshot.queryParams['age'];
    console.log(this.detailsName,'77777')
    // this.ActivatedRoute.params.subscribe((params:Params)=>this.detailsAge = params['age']);
  }
}
