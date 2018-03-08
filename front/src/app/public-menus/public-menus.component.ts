import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
    selector: 'app-public-menus',
    templateUrl: './public-menus.component.html',
    styleUrls: ['./public-menus.component.css']
})
export class PublicMenusComponent implements OnInit {

    constructor(private routeInfo: ActivatedRoute, private router: Router) { }

    ngOnInit() {
    }
    toMenus(){
        this.router.navigate(['/home/menus']);
    }
    toOrder(){
        this.router.navigate(['/order']);
    }
    toCenter(){
        this.router.navigate(['/center']);
    }
} 
