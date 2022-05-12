import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ICategory } from '../Models/icategory';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CateogryService {

  private httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // , Authorization': 'Token'
      })
    }
  }
  getAllCategories():Observable<ICategory[]>

  {

    return this.httpClient.get<ICategory[]>(`${environment.BaseUrl}/Category`)

  }

  

  getCategoryById(catId :number):Observable<ICategory>

  {

    return this.httpClient.get<ICategory>(`${environment.BaseUrl}/Category/${catId }`)

  }
}