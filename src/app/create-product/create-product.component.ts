import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormArray,FormBuilder, Validators} from '@angular/forms';
import {ProductDataService} from '../product-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productFormGroup:any;
  constructor(private fb:FormBuilder, private productDataService:ProductDataService, private router:Router) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
      name:this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
      price:this.fb.control(''),
      image:this.fb.control(''),
      description:this.fb.control('')
    });
  }

  submitForm(){
    if(this.productFormGroup.valid){
      //console.log(this.productFormGroup.value);
      this.productDataService.addProduct(this.productFormGroup.value).subscribe((data)=>{
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
