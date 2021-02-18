import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {ProductDataService} from '../product-data.service';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productFormGroup:any={};
  prodObj:any={};
  constructor(private fb:FormBuilder,private router:Router,private activatedRoute:ActivatedRoute,private productDataService:ProductDataService) {
    this.productFormGroup=fb.group({
      name:this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
      price:this.fb.control(''),
      image:this.fb.control(''),
      description:this.fb.control('')
    });//this.form._updateTreeValidity is not a function
   }

  ngOnInit(): void {
    let currentId=this.activatedRoute.snapshot.params.id;
    //console.log(this.activatedRoute.snapshot);
    //this.prodObj=this.productDataService.getProductById(currentId);
    // console.log(prodObj);
    this.productDataService.getProductById(currentId).subscribe((data:any)=>{
      this.prodObj = data;
      this.productFormGroup=this.fb.group({
        name:this.fb.control(this.prodObj.name,[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
        price:this.fb.control(this.prodObj.price),
        image:this.fb.control(this.prodObj.image),
        description:this.fb.control(this.prodObj.description)
      });
    });
    //console.log(this.prodObj);
    // this.productFormGroup=this.fb.group({
    //   name:this.fb.control(this.prodObj.name,[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
    //   price:this.fb.control(this.prodObj.price),
    //   image:this.fb.control(this.prodObj.image),
    //   description:this.fb.control(this.prodObj.description)
    // });
  }

  editForm(){
    if(this.productFormGroup.valid){
        // console.log(this.productFormGroup.value);
        this.productDataService.updateProduct(this.prodObj.id,this.productFormGroup.value).subscribe((data)=>{
        this.productFormGroup.reset();
        this.router.navigate(['/products']);
      });
      // this.productFormGroup.reset();
      // this.router.navigate(['/products']);
    }
    else{
      this.validateAllFormFields(this.productFormGroup);
    }
  }

  validateAllFormFields(productFormGroup: FormGroup) {         //{1}
  Object.keys(productFormGroup.controls).forEach(field => {  //{2}
    const control = productFormGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}

}
