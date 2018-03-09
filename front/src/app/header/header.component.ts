import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input() Title: string;
    @Input() Back: string;

    constructor(private router:Router) { }

    ngOnInit() {
      // console.log(this.Back)
    }
    back(){
      // console.log(this.Back )
      if(this.Back != undefined){
        this.router.navigate([this.Back])
      } else {
        // window.history.back()
        // this.router.navigate
        // history.go(-1); 
      }
    }

}
