import { Component, OnInit, OnChanges, Input, DoCheck, ViewChild} from '@angular/core';
// import {Http} from '@angular/http';
// import $http from '../../utils/httpClient'
import {HttpService} from '../../utils/ajax'
import { CommonService} from '../../utils/common.service'
// import global from '../../utils/global'
import {Utils} from '../../utils/dateFormat'
import { DataformComponent} from '../dataform/dataform.component'
@Component({
    selector: 'datagrid',
    templateUrl: './datagrid.component.html',
    styleUrls: ['./datagrid.component.css']
})

export class DataGridComponent implements OnInit, DoCheck{
    // global:Object =global;
    // publicDic:Object;//公共字典
    // 分页页数
    _current: number = 1;
    // 复制分页页数
    current: number = 1;
    // 每页条数
    PageSize: number = 10;
    // 复制每页条数
    _PageSize: number = 10;
    dataset: Array<any> = null;
    columns: Array<string> = null;
    filterColumns: Array<string> = null;
    privateDic:Object;//私有字典
    multiple:boolean;//多选
    currentTrArray:Array<number>=[];//选中的id
    filterDataConfig:Object={};
    paginationConfig:Object;//分页的配置信息
    pageCount: number = 0;//分页的总页数
    rowsCount: number = 0;//数据总条数
    apiConfig:string;//接口
    searchConfig:Object={};
    addConfig:Object={};
    // 搜索的内容
    _value: string;
    // 复制搜索的内容
    values: string;
    btnShow: boolean = false;
    // id
    UUIDConfig: string;

    operateConfig : boolean;
    isVisible = false;
    isConfirmLoading = false;

    objData: Object = {};
    type: boolean;
    showDisabled: boolean =true;

    errorTip: boolean = false;

    @ViewChild('objs1')
    objs1: DataformComponent;
    
    @Input() config: string;

    showidentify: boolean = false;


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
            this.addConfig = configRes['add'] || {};
            this.UUIDConfig = configRes['UUID'] || '';
            this.apiRequest();
            // 获取身份
            let id = localStorage.getItem( 'identify' );
            if ( id == "管理员" ) {
                this.showidentify = true;
            } else if ( id == "员工" ) {
                this.showidentify = false;
                this.addConfig['show'] = false;
            }
          
        })
    }
    ngDoCheck() {
        if (this.PageSize != this._PageSize || this.current != this._current){
            this.apiRequest();
        }
        let len;
        if ( this.objs1){
            len = this.objs1.colsConfig;
            if ( this.objData && len.length != 0 && ( Object.keys( this.objData ) ).length >= len.length) {
                for ( let i = 0; i < len.length;i++){
                    if (!this.objData[len[i]] ) {
                        this.showDisabled = true;
                        return;
                    } 
                    else if ( this.objData[len[i]]){
                        this.showDisabled = false;
                    }
                }

            }
        }
    }
    showModal = () => {
        this.isVisible = true;
        this.type = true;
    }

    handleOk = (e) => {
        this.isConfirmLoading = true;
        setTimeout(() => {
            // 更新数据
            let pageParams = {};
            if ( this.type == true){
                pageParams['status'] = 'add';
            }else{
                pageParams['status'] = 'update';
            }
            if ( this.btnShow == true ) {
                pageParams['state'] = 'search';
                pageParams['content'] = this.values;
            }
            pageParams['pageitems'] = this.PageSize;
            pageParams['page'] = this._current;
            pageParams['data'] = this.objData;
            this.http.get( this.apiConfig, pageParams ).then( ( res ) =>
            {
                console.log(res)
                if(res == "fail"){
                    this.errorTip = true;
                    this.isConfirmLoading = false;
                }else{
                    this.orderArray( res );
                    this.type = false;
                    this.isVisible = false;
                    this.isConfirmLoading = false;
                    this.objData = {};
                    this.showDisabled = true;
                    this.errorTip = false;
                }
                this.currentTrArray = [];
            } )

        }, 1000);
    }

    handleCancel = (e) => {
        this.isVisible = false;
        this.errorTip = false;
        this.showDisabled = true;
        this.objData = {};
    }
    getKeys(item){
        if(item){
            return Object.keys(item);
        }
        
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
        else if (colsName.type == "Regplace"){
            let reg = new RegExp(colsName.reg);
            return _val.replace(reg, colsName.replaceVal);
        }
    }
    // pageTo(event){
    //     if (event.target.classList.contains('ant-select-selection__placeholder')){
    //         return;
    //     }else if (!event.target.parentNode.classList.contains('ant-pagination-options')){
    //         if (!isNaN(event.target.innerText) && this._current != event.target.innerText && event.target.innerText){
    //             this._current = event.target.innerText;
    //         } else if (event.target.tagName == 'UL'){
    //             return;
    //         }
    //        if (event.target.parentNode.classList.contains('ant-pagination-disabled')) {
    //             return;
    //         } 
    //         console.log(this._current)
    //         this.apiRequest();
    //     } 
    // }

    operate(_obj,idx){
        this.isVisible = true;
        this.objData = _obj;
        this.errorTip = false;
        this.currentTrArray = [idx];
    }

    apiRequest() {
        //配置信息中的 api
        let pageParams = {};
        this._PageSize = this.PageSize;
        this.current = this._current;
        if (this.btnShow == true) {
            pageParams['status'] = 'search';
            pageParams['pageitems'] = this.PageSize;
            pageParams['content'] = this.values;
            pageParams['page'] = this._current;
        } else if (this.paginationConfig) {
            // pageParams['pageitems'] = this.paginationConfig['pageitems'];
            pageParams['pageitems'] = this.PageSize;
            pageParams['page'] = this._current;
        }
        this.http.get(this.apiConfig, pageParams).then((res) => {
            
            // if ( res == "fail" ) {
            //     this.errorTip = true;
            //     this.isConfirmLoading = false;
            // } else {
            //     this.orderArray( res );
            //     this.type = false;
            //     this.isVisible = false;
            //     this.isConfirmLoading = false;
            //     this.objData = {};
            //     this.errorTip = false;
            //     this._value = "";
            // }
            this.orderArray( res );
            this.type = false;
            this.isVisible = false;
            this.errorTip = false;
            this.isConfirmLoading = false;
            this.objData = {};
            this.currentTrArray=[];
        })
    }

    // 合并含有orderId字段的数据
    orderArray(res){
        if ( res['data1'].length > 0 ) {
            if ( res['data1'][0]['orderId'] ) {
                let data1array = res['data1'];
                for ( let i = 0; i < data1array.length; i++ ) {
                    for ( let j = i + 1; j < data1array.length; j++ ) {
                        if ( data1array[i]['orderId'] == data1array[j]['orderId'] ) {
                            data1array[i]['foodName'] += " , " + data1array[j]['foodName'];
                            data1array.splice( j, 1 );
                            j--;
                        }
                    }
                }
            }
            this.dataset = res['data1'];
            this.rowsCount = res['data2'][0]['colsCount'];//总记录数
            this.pageCount = Math.ceil( this.rowsCount / this.PageSize );//计算页数
            this._value = "";
        }
        else {
            this.dataset = [];
            this.rowsCount = 0;
            this.pageCount = 0;
            this._value = "";
        }
    }
    onSearch(){
        // if (this._value == ""){
        //     this.btnShow = true;
        //     this.values = this._value;
        //     this.apiRequest();
        // }
        if (this.btnShow == true && this._value == ""){
            this.btnShow = false;
        }else{
            this.btnShow = true;
            this.values = this._value;
        }
        this.apiRequest();
    }
    goback(){
        this.btnShow = false;
        this.apiRequest();
    }
    // 删除数据
    del(){
        let strings = "";
        for(let i=0;i<this.currentTrArray.length;i++){
            strings = strings + this.dataset[this.currentTrArray[i]][this.UUIDConfig] + ",";
        }
        strings = strings.slice(0,-1);
        let pageParams = {};
        if (this.btnShow == true){
            pageParams['state'] = 'search';
            pageParams['content'] = this.values;
        }
        pageParams['status'] = 'del';
        pageParams['array'] = strings;
        pageParams['pageitems'] = this.PageSize;
        pageParams['page'] = this._current;
        this.http.get(this.apiConfig, pageParams).then((res) => {
            this.orderArray( res );
            this.currentTrArray=[];
        })
    }

}