import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b>Space Monkeys</b> 2018</span>    
    <span class="social-media"> Follow us <img src="./assets/skins/lightgray/img/instagram_icon.ico">    <img src="./assets/skins/lightgray/img/facebook_icon.ico"></span>   
  `
})
export class FooterComponent {}
