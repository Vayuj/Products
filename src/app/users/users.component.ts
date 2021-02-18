import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../user-data.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataListing:Array<any>=[];
  constructor(private dataService:UserDataService) { }

  ngOnInit(): void {
    // this.dataListing = this.dataService.getAllUsers()
    this.dataService.getAllUsers().subscribe((data)=>{
      this.dataListing=data;
    })
  }

}
