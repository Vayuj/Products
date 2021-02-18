import { Component, OnInit, Input } from '@angular/core';
import {prd} from '../model'
import {ProductDataService} from '../product-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() productCard:any={};
  constructor(private productObj:ProductDataService, private router:Router) { }

  ngOnInit(): void {
  }

  deleteProductCard(id:number){
    //this.productObj.deleteProductById(id);
    this.productObj.deleteProductById(id).subscribe((data:any)=>{
      // this.router.navigate(['/products']);
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['products'])
      );
      console.log("routing Done");
    });
  }

}
