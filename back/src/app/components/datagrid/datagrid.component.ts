import { Component, OnInit, Input} from '@angular/core';
// import {Http} from '@angular/http';
// import $http from '../../utils/httpClient'
import {HttpService} from '../../utils/ajax'
import { CommonService} from '../../utils/common.service'
// import global from '../../utils/global'
import {Utils} from '../../utils/dateFormat'
@Component({
    selector: 'datagrid',
    templateUrl: './datagrid.component.html',
    styleUrls: ['./datagrid.component.css']
})

export class DataGridComponent implements OnInit{
    // global:Object =global;
    // publicDic:Object;//公共字典
    dataset: Array<any> = null;
    columns: Array<string> = null;
    filterColumns: Array<string> = null;
    privateDic:Object;//私有字典
    multiple:boolean;//多选
    currentTrArray:Array<number>=[];//选中的id
    filterDataConfig:Object={};
    paginationConfig:Object;//分页的配置信息
    pageCount: number = 0;//分页的总页数
    apiConfig:string;//接口
    searchConfig:Object={};

    operateConfig : boolean;
    
    @Input() config: string;

    constructor(private http: HttpService, private common: CommonService){}

    ngOnInit(){
        //获取当前模块的配置
        this.http.get(this.config).then((configRes) => {
            let cols = configRes['cols'];
            this.columns = !cols || cols == '*' ? [] : cols.split(',');
            let filterCols = configRes['filterCols'];
            this.filterColumns = !filterCols ? [] : filterCols.split(',');//过滤列
            this.privateDic = configRes['dictionary'] || {};//私有字典(要改的列名)
            this.multiple=configRes['multiple'];//多选
            this.filterDataConfig=configRes['filterData'];
            this.paginationConfig = configRes['pagination'];//分页配置信息
            this.apiConfig=configRes['api'];//数据接口
            this.operateConfig = configRes['operate'];
            this.searchConfig=configRes['search'] || {};
            this.apiRequest();
          
        })
    }
    apiRequest(_page=1){
        //配置信息中的 api
        let pageParams = {};
        if (this.paginationConfig) {
            pageParams['pageitems'] = this.paginationConfig['pageitems'];
            pageParams['page'] =_page;
            
        }
        this.http.get(this.apiConfig, pageParams).then((res) => {
            this.dataset = res['data1'];
            let rowsCount=res['data2'][0]['colsCount'];//总记录数
            let pageItems = this.paginationConfig['pageitems'];//每页显示数量
            this.pageCount = Math.ceil(rowsCount /pageItems);//计算页数
        })
    }
    getKeys(item){
        return Object.keys(item);
    }
    selectTr(_idx,event){
        if (this.multiple && event.target.tagName != "BUTTON"){
            if(this.currentTrArray.indexOf(_idx)>-1){
                this.currentTrArray.splice(this.currentTrArray.indexOf(_idx),1);    
            }
            else{
                this.currentTrArray.push(_idx);
            } 
        } else if (event.target.tagName == "BUTTON"){
            
        }
        else{
            this.currentTrArray=[_idx];
        }
        
    }
    selectAll(){
        if(this.currentTrArray.length!=this.dataset.length){
            this.currentTrArray=[];
            for(let i=0;i<this.dataset.length;i++){
                this.currentTrArray.push(i);
            }
        }
        else{
            this.currentTrArray=[];
        }
    }
    filterData(_key,_val){
        let colsName=this.filterDataConfig[_key];
        if (!colsName){
            return _val;
        }
        else if (colsName.type=="DateFormat"){
            return Utils.dateFormat(new Date(_val),colsName.format);
        }
        else if (colsName.type =="Regplace"){
            let reg = new RegExp(colsName.reg);
            return _val.replace(reg, colsName.replaceVal);
        }
    }
    pageTo(event){
        let _page=event.target.value;
        this.apiRequest(_page);
    }

    operate(_obj){
        console.log(_obj)

    }
}