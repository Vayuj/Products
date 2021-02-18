import { Component, OnInit } from '@angular/core';
import {ProductDataService} from '../product-data.service'
import {prd} from '../model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dataListing:Array<any>=[];
  constructor(private dataService:ProductDataService) { }

  ngOnInit(): void {
    // this.dataListing = this.dataService.getAllProducts();
    this.dataService.getAllProducts().subscribe((data:Array<any>)=>{
      this.dataListing = data;
    });
    //console.log(this.dataListing);
  }

}
