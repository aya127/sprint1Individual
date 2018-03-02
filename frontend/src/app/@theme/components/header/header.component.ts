import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { NbMenuBag } from '@nebular/theme/components/menu/menu.service';
import { CookieService } from 'angular2-cookie/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../../GlobalService'

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';
  user: any;
  userMenu: any[];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private _cookieService:CookieService,
    private http: HttpClient,
    private service:GlobalService
  ) {
    this.service.itemValue.subscribe((data) => {
      console.log("notified with:");
      console.log(data);

      if(data === null) {
        this.userMenu = [{ title: 'Register' }, {title: 'Login'}];
      } else {
        this.userMenu = [{ title: 'Logout' }];
      }
    });
  }

  ngOnInit() {
    console.log("loading ngOnInit")
    const options = {
      withCredentials: true
    };

    this.http.get('http://localhost:3000/api/isloggedin', options)
      .subscribe(res => {
        console.log(res);
        if(res["state"] === "failure") {
          this.userMenu = [{ title: 'Register' }, {title: 'Login'}];
        } else {
          this.userMenu = [{ title: 'Logout' }];
        }
      });

    this.onMenuItemClick();
  }

  ngAfterViewInit() {
    console.log("ttt");
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  onMenuItemClick() {
    this.menuService.onItemClick().subscribe((bag: NbMenuBag) => {
      console.log(bag.item.title);
      if (bag.item.title === 'Login') {
        console.log('Attempted login');
        window.location.href = "http://localhost:4200/#/user/login";
      }
      if (bag.item.title === 'Logout') {
        console.log("logging out");
        const options = {
          withCredentials: true
        };
        this.http.get('http://localhost:3000/api/logout', options).subscribe(res => this.service.currentUser = null );
      }
      if(bag.item.title === 'Register'){
        window.location.href = "http://localhost:4200/#/user/register";
      }
    });
  }
}
