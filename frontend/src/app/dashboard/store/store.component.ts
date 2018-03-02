import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {  FormControl} from '@angular/forms';

import { StoreService } from './store.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
// Define a users property to hold our user data
products: Array<any>;
create:FormGroup;
update:FormGroup;
stateCtrl: FormControl;
// Create an instance of the StoreService through dependency injection
  constructor(private _storeService: StoreService) { 
  this._storeService.getProducts().subscribe(res => this.products = res);
  
  this.create = new FormGroup({
    //addID:new FormControl(),
    addName:new FormControl(),
    addPrice:new FormControl(),
    addSeller:new FormControl()
 });

 this.update = new FormGroup({
  //addID:new FormControl(),
  editName:new FormControl(),
  editPrice:new FormControl(),
  editSeller:new FormControl()
});
  
  }

  deleteProduct(product){
    this._storeService.deleteProduct(product).subscribe((res:any) => {this._storeService.getProducts().subscribe(res =>this.products=res)});
  }
  
  updateProduct(product){
    this._storeService.updateProduct(product,this.update.value).subscribe((res:any) => {this._storeService.getProducts().subscribe(res =>this.products=res)});
  }

  createProduct(){

//console.log(create.addID);
//console.log(this.create.value.addName);
//console.log(this.create.value.addPrice);
//console.log(create.addSeller);
this._storeService.createProduct(this.create.value).subscribe((res:any) => {this._storeService.getProducts().subscribe(res =>this.products=res)});
}
  


  ngOnInit(){
    
    }
  


}



