import { Component, OnInit, Input } from '@angular/core';
import {UserDataService} from '../user-data.service'
import {usr} from '../model'
import {Router} from '@angular/router'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() userCard:any={};
  constructor(private userObj:UserDataService, private router:Router) { }

  ngOnInit(): void {
  }

  deleteUserCard(id:number){
    // this.userObj.deleteUserById(id);
    this.userObj.deleteUserById(id).subscribe((data)=>{
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['users'])
      );
    })
  }
}
