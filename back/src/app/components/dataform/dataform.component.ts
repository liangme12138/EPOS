import { Component, OnInit,Input,Output} from '@angular/core';
import {HttpService} from '../../utils/ajax'
import {CommonService} from '../../utils/common.service'
import
{
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})
export class DataformComponent implements OnInit {
  @Input() api:string;
  @Input() objs: Object;
  // @Output() colsConfig: 
  colsConfig:Array<string>=[];
  privateDic:Object={};
  colsAttributes:Object={};
  selectApiDataset:Object={};

  constructor( private http: HttpService, private common: CommonService, private fb: FormBuilder) { }

  validateForm: FormGroup;
  controlArray = [];
  isCollapse = true;

  toggleCollapse ()
  {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach( ( c, index ) =>
    {
      c.show = this.isCollapse ? ( index < 6 ) : true;
    } )
  }

  resetForm ()
  {
    this.validateForm.reset();
  }

  ngOnInit() {
    this.validateForm = this.fb.group( {} );

    for ( let i = 0; i < 10; i++ ) {
      this.controlArray.push( { index: i, show: i < 6 } );
      this.validateForm.addControl( `field${i}`, new FormControl() );
    }

    this.http.get(this.api).then((configRes)=>{
      
      this.colsConfig = configRes['cols'].split(',');
      this.colsAttributes = configRes['colsAttributes'] || {};
        for (let item in this.colsAttributes) {
          if (this.colsAttributes[item]['type'] == 'select-api') {
            let _api = this.colsAttributes[item]['api'];
            this.http.get(_api).then((res) => {
              this.selectApiDataset[item] = res;
            })
          }
        }
    
    })
    this.http.get("config/product.txt").then((configRes) => {
      this.privateDic = configRes['dictionary'] || {};//私有字典(要改的列名)
    })
  }
  
}
