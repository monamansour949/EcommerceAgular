import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private httpOptions;
  constructor( private httpClient :HttpClient) { 
    this.httpOptions={ headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // , Authorization': 'Token'
    })
  }
  }

  getAllProducts():Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.BaseUrl}/Product`)
  }
  
  getProductById(prdId :number):Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.BaseUrl}/Product/${prdId }`)
  }

  getProductByCategoryId(catId:number):Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.BaseUrl}/Product?categoryId=${catId}`)
  }

  addProduct(newProduct :IProduct): Observable<IProduct>
  {
    return this.httpClient.post<IProduct>(`${environment.BaseUrl}/Product`, JSON.stringify(newProduct),this.httpOptions);
  }



}
