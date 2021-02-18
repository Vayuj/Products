import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserDataService} from '../user-data.service';
import {usr} from '../model'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userObj:any={};
  constructor(private activatedRoute:ActivatedRoute, private userDataService:UserDataService) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.routeConfig);
    // this.userObj=this.userDataService.getUserById(this.activatedRoute.snapshot.params.id);
    this.userDataService.getUserById(this.activatedRoute.snapshot.params.id).subscribe((data)=>{
      this.userObj=data;
    })
  }
}
