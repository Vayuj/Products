import { Injectable } from '@angular/core';
import {prd} from './model'
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  // data:Array<any>=[
  //   {
  //     id:1,
  //     name:"product 1",
  //     image:"http://placehold.it/700x400",
  //     description:"description",
  //     price:20
  //   },
  //   {
  //     id:2,
  //     name:"product 2",
  //     image:"http://placehold.it/700x400",
  //     description:"description",
  //     price:30
  //   }
  // ]
  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<Array<Object>>{
    return this.httpClient.get<Array<Object>>('https://5cdd0a92b22718001417c19d.mockapi.io/api/products');
    // return this.data;
  }

  getProductById(id:number):Observable<Object>{//any
    // return this.data.find(p=>p.id==id);
    return this.httpClient.get<Object>('https://5cdd0a92b22718001417c19d.mockapi.io/api/products/' + id);//`https://5cdd0a92b22718001417c19d.mockapi.io/api/products/'${id}`
  }

  deleteProductById(id:number):Observable<Object>{
    return this.httpClient.delete<Object>('https://5cdd0a92b22718001417c19d.mockapi.io/api/products/' + id);
    // this.data.splice(this.data.findIndex(a => a.id === id),1);
  }

  addProduct(prod:any):Observable<Object>{
    //prod.id=this.getAllProducts().subscribe((data:Array<any>)=>{}).length+1;
    return this.httpClient.post<Object>('https://5cdd0a92b22718001417c19d.mockapi.io/api/products',prod);
    // prod.id=this.data.length+1;
    // prod.image="http://placehold.it/700x400";
    // this.data.push(prod);
  }

  updateProduct(id:number,prod:any){
    return this.httpClient.put(`https://5cdd0a92b22718001417c19d.mockapi.io/api/products/${id}`,prod);
    // let index=this.data.findIndex((obj)=>{return obj.id==id});
    // this.data[index]=prod;
  }
}

// data:Array<any>=[
//   {
//     id:1,
//     name:"product 1",
//     image:"http://placehold.it/700x400",
//     description:"description",
//     price:"price 1"
//   },
//   {
//     id:2,
//     name:"product 2",
//     image:"http://placehold.it/700x400",
//     description:"description",
//     price:"price 2"
//   }
// ]