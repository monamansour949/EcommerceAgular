import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICart } from '../Models/icart';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public cartItemList:any=[];
  productList = new BehaviorSubject <any>([]);
  private httpOptions;
  constructor( private httpClient :HttpClient) { 
    this.httpOptions={ headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // , Authorization': 'Token'
    })
  }
  }

  getAllCarts():Observable<ICart[]>
  {
    return this.httpClient.get<ICart[]>(`${environment.BaseUrl}/Cart`)
  }
  
  getCartById(cartId :number):Observable<ICart>
  {
    return this.httpClient.get<ICart>(`${environment.BaseUrl}/Cart/${cartId }`)
  }


  addCart(newCart :ICart): Observable<ICart>
  {
    return this.httpClient.post<ICart>(`${environment.BaseUrl}/Cart`, JSON.stringify(newCart),this.httpOptions);
  }

  updateCart(cartId :number,updatedCart:ICart)
  {
    return this.httpClient.patch<ICart>(`${environment.BaseUrl}/Cart/${cartId}`,updatedCart)

  }
  deleteCart(cartId :number)
  {
    return this.httpClient.delete<ICart>(`${environment.BaseUrl}/Cart/${cartId}`);
    
  }

  getProducts(){
    this.productList.asObservable();
  }
  setProducts(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();

    console.log(this.cartItemList);
  }
  getTotalPrice(){
    let grandTotal =0;
    this.cartItemList.map((a:any)=>{
    grandTotal +a.total;
    })
  }

  removeCartitem (product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
          this.cartItemList.splice(index,1);
      }
      })
  }

  removeAll(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }



}
