import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class StoreService {

  result:any;

  constructor(private _http: Http) { }

  // getUsers() {
  //   return this._http.get("/api/users")
  //     .map(result => this.result = result.json().data);
  // }

  getProducts(){
    return this._http.get("http://localhost:3000/api/product/getProducts")
      .map(result => this.result = result.json().data);
  }
  deleteProduct(product){
    
   let myParams= new URLSearchParams();
   myParams.append('id',product._id);
    return this._http.delete("http://localhost:3000/api/product/deleteProduct/" + product._id,{search: myParams})
    .map(result => this.result = result.json().data);
  }

  createProduct(create){

    const product={"name":create.addName,"price":parseInt(create.addPrice),"sellerName":create.addSeller};

     return this._http.post("http://localhost:3000/api/product/createProduct",product)
     .map(result => this.result = result.json());
   }
 
   updateProduct(product,update){
    const updatedProduct={"name":update.editName,"price":parseInt(update.editPrice),"sellerName":update.editSeller};
    let myParams= new URLSearchParams();
    myParams.append('id',product._id);
     return this._http.patch("http://localhost:3000/api/product/updateProduct/" + product._id,updatedProduct)
     .map(result => this.result = result.json().data);
   }

}
