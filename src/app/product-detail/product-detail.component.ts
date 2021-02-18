import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductDataService} from '../product-data.service';
import {prd} from '../model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productObj:any={};
  constructor(private activatedRoute:ActivatedRoute, private productDataService:ProductDataService) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params.id);
    // this.productObj=this.productDataService.getProductById(this.activatedRoute.snapshot.params.id);
    this.productDataService.getProductById(this.activatedRoute.snapshot.params.id).subscribe((data)=>{
      this.productObj=data;
    })
  }
}
