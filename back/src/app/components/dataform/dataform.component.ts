import { Component, OnInit,Input,Output} from '@angular/core';
import {HttpService} from '../../utils/ajax'
import {CommonService} from '../../utils/common.service'
import
{
  FormBuilder,
  FormGroup,
  Validators
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

  validateForm: FormGroup;

  constructor( private http: HttpService, private common: CommonService,private fb: FormBuilder) { }

  

  ngOnInit() {
    
    this.validateForm = this.fb.group( {
      formLayout: ['horizontal'],
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    } );

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

  submitForm ()
  {
    for ( const i in this.validateForm.controls ) {
      this.validateForm.controls[i].markAsDirty();
    }
  }

  get isHorizontal ()
  {
    return this.validateForm.controls['formLayout'] && this.validateForm.controls['formLayout'].value === 'horizontal';
  }
  
}
