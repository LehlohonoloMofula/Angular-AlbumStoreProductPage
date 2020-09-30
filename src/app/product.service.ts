import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Album } from './album';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Product }from './product';

@Injectable()
export class ProductService {
  private _albumUrl="../assets/album.json";
  Album;
  private _productsUrl = '../assets/products.json' ; 
  Product;

  constructor(private _http: Http, private response:Response) { }

  getProducts() : Observable<Product[]>{
    this._http.get(this._productsUrl).map((response) =>
    <Product[]>response.json())
     return ;
  }

  get(){

  }

  getAlbum(id:number): Observable<Album>{
    return this._http.get(this._albumUrl).map(( response )=> 
    <Album>response.json());
  }
}
