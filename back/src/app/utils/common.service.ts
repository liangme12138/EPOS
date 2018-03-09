import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()

export class CommonService{
    lanType: string = 'en';
    publicDic: Object = {};

    constructor(private http: Http){
        http.get('http://10.3.132.56:8080/config/dictionary.txt').subscribe((dicRes)=>{
            this.publicDic = dicRes.json();
        })
    }
}