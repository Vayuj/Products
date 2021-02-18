import { Component, OnInit } from '@angular/core';
import {ProductDataService} from '../product-data.service';
import {UserDataService} from '../user-data.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  userDataService:Array<any>=[];
  productDataService:Array<any>=[];
  constructor(private productService:ProductDataService,private userService:UserDataService) { }

  ngOnInit(): void {
    // this.userDataService = this.userService.getAllUsers();
    // this.productDataService = this.productService.getAllProducts();
    this.productService.getAllProducts().subscribe((data:Array<any>)=>{
      this.productDataService = data;
    });
  }
}
