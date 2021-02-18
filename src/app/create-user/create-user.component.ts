import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormArray,FormBuilder, Validators} from '@angular/forms';
import {UserDataService} from '../user-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userFormGroup:any;
  constructor(private fb:FormBuilder, private userDataService:UserDataService, private router:Router) { }

  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      username1:this.fb.control(''),//[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
      gender1:this.fb.control(''),
      email1:this.fb.control(''),
      mobile1:this.fb.control(''),
      image1:this.fb.control(''),
      password1:this.fb.control('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirmpass:this.fb.control('',Validators.required),
      country1:this.fb.control(''),
      state1:this.fb.control(''),
      city1:this.fb.control(''),
      zipcode1:this.fb.control(''),
    },
    {validator: this.MustMatch('password', 'confirmPassword')}
    );
  }

  submitForm(){
    if(this.userFormGroup.valid){ //&& this.userFormGroup.value.password==this.userFormGroup.value.confirmPassword){
      //console.log(this.userFormGroup.value);
      delete this.userFormGroup.confirmPassword;
      this.userDataService.addUser(this.userFormGroup.value).subscribe((data)=>{
        this.userFormGroup.reset();
        this.router.navigate(['/users']);
      });
      // this.userFormGroup.reset();
      // this.router.navigate(['/users']);
    }
    else{
      this.validateAllFormFields(this.userFormGroup);
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

MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
}
