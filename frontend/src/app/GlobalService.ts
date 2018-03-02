import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

export class GlobalService {
 itemValue = new Subject();

 set currentUser(value) {
  console.log("value:")
   console.log(value);
   this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
   localStorage.setItem('currentUser', value);
 }

 get currentUser() {
   return localStorage.getItem('currentUser');
 }

 // updateTheItem() {
 //    const options = {
 //      withCredentials: true
 //    };

 //    this.http.get('http://localhost:3000/api/isloggedin', options)
 //      .subscribe(res => {
 //        console.log(res);
 //        this.currentUser = res["state"];
 //      });
 // }
}
