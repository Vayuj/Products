import { Injectable } from '@angular/core';
import {usr} from './model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  // data:Array<any>=[
  //   {
  //     id:1,
  //     name:"user 1",
  //     image:"https://st2.depositphotos.com/1502311/12020/v/600/depositphotos_120206860-stock-illustration-profile-picture-vector.jpg",
  //     gender:"male",
  //     email:"user1@mail.com",
  //     mobile:1234567890,
  //     password:"user1Password",
  //     country:"India",
  //     state:"Telangana",
  //     city:"Hyderabad",
  //     zipcode:500023
  //   },
  //   {
  //     id:2,
  //     name:"user 2",
  //     image:"https://cdn1.vectorstock.com/i/thumb-large/46/55/person-gray-photo-placeholder-woman-vector-22964655.jpg",
  //     gender:"female",
  //     email:"user2@mail.com",
  //     mobile:2345678901,
  //     password:"user2Password",
  //     country:"India",
  //     state:"Telangana",
  //     city:"Hyderabad",
  //     zipcode:500025
  //   }
  // ]
  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<Array<Object>>{
    // return this.data;
    return this.httpClient.get<Array<Object>>('https://5cdd0a92b22718001417c19d.mockapi.io/api/users');
  }
  getUserById(id:number):Observable<Object>{
    return this.httpClient.get<Object>('https://5cdd0a92b22718001417c19d.mockapi.io/api/users/' + id);
    // return this.data.find(p=>p.id==id);
  }

  deleteUserById(id:number):Observable<Object>{
    return this.httpClient.delete('https://5cdd0a92b22718001417c19d.mockapi.io/api/users/' + id);
    // this.data.splice(this.data.findIndex(a=>a.id===id),1);
  }

  addUser(usr:any):Observable<Object>{
    return this.httpClient.post<Object>('https://5cdd0a92b22718001417c19d.mockapi.io/api/users',usr);
    // usr.id=this.data.length+1;
    // if(usr.gender==="male"){
    //   usr.image="https://st2.depositphotos.com/1502311/12020/v/600/depositphotos_120206860-stock-illustration-profile-picture-vector.jpg"
    // }
    // else{
    //   usr.image="https://cdn1.vectorstock.com/i/thumb-large/46/55/person-gray-photo-placeholder-woman-vector-22964655.jpg"
    // }
    // this.data.push(usr);
  }

  updateUser(id:number,usr:any):Observable<Object>{
    return this.httpClient.put('https://5cdd0a92b22718001417c19d.mockapi.io/api/users/' + id,usr);
    // let index=this.data.findIndex((obj)=>{return obj.id==id});
    // this.data[index]=usr;
  }
}
