import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../utils/ajax';
@Component({ 
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  menuType:Object;
  menuID:string = '002';
  menus:Object;
  constructor(private http: HttpService) { }

  ngOnInit() {
      
      this.http.get('menus.php', { state: 'getMenus'}).then((res) => {
          // console.log(res);
          this.menuType = res ;
        this.getMenuItem(this.menuID)
      })
  }
  getMenuItem(eve){
    this.http.get('menus.php', { state: 'getMenusId', menuID: eve}).then((res) => {
      console.log(res);
      this.menus = res;
    })
  }

}
