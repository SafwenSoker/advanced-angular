import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  private userApi = 'https://jsonplaceholder.typicode.com/users/1';
  private ordersApi = 'https://jsonplaceholder.typicode.com/posts';
  private productsApi = 'https://jsonplaceholder.typicode.com/comments';


  getUserDetails(): Observable<any> {
    return this.http.get(this.userApi);
  }

  getOrders(): Observable<any> {
    return this.http.get(this.ordersApi);
  }

  getProducts(): Observable<any> {
    return this.http.get(this.productsApi);
  }
}
