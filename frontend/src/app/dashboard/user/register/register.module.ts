import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { RegisterRoutingModule } from './register-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { RegisterComponent } from './register.component';

@NgModule({
  imports: [ThemeModule, RegisterRoutingModule, HttpClientModule],
  declarations: [RegisterComponent],
  providers: []
})
export class RegisterModule {}
