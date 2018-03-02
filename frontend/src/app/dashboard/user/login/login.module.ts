import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { LoginRoutingModule } from './login-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [ThemeModule, LoginRoutingModule, HttpClientModule],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule {}
