import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormArray,FormBuilder, Validators} from '@angular/forms';
import {UserDataService} from '../user-data.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userFormGroup:any;
  usrObj:any;
  constructor(private fb:FormBuilder, private userDataService:UserDataService, private router:Router,private activatedRoute:ActivatedRoute) {
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
  })
   }

  ngOnInit(): void {
    let currentId=this.activatedRoute.snapshot.params.id;
    //console.log(this.activatedRoute.snapshot);
    // this.usrObj=this.userDataService.getUserById(currentId);
    this.userDataService.getUserById(currentId).subscribe((data)=>{
      this.usrObj=data;
      this.userFormGroup=this.fb.group({
        username1:this.fb.control(this.usrObj.username1),//[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
        gender1:this.fb.control(this.usrObj.gender1),
        email1:this.fb.control(this.usrObj.email1),
        mobile1:this.fb.control(this.usrObj.mobile1),
        image1:this.fb.control(this.usrObj.image1),
        password1:this.fb.control(this.usrObj.password1,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
        confirmpass:this.fb.control('',Validators.required),
        country1:this.fb.control(this.usrObj.country1),
        state1:this.fb.control(this.usrObj.state1),
        city1:this.fb.control(this.usrObj.city1),
        zipcode1:this.fb.control(this.usrObj.zipcode1),
      },
      {validator: this.MustMatch('password', 'confirmPassword')}
      );
    })
    // this.userFormGroup=this.fb.group({
    //   name:this.fb.control(this.usrObj.name),//[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
    //   gender:this.fb.control(this.usrObj.gender),
    //   email:this.fb.control(this.usrObj.email),
    //   mobile:this.fb.control(this.usrObj.mobile),
    //   image:this.fb.control(this.usrObj.image),
    //   password:this.fb.control(this.usrObj.password,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    //   confirmPassword:this.fb.control('',Validators.required),
    //   country:this.fb.control(this.usrObj.country),
    //   state:this.fb.control(this.usrObj.state),
    //   city:this.fb.control(this.usrObj.city),
    //   zipcode:this.fb.control(this.usrObj.zipcode),
    // },
    // {validator: this.MustMatch('password', 'confirmPassword')}
    // );
  }
  
  editForm(){
    if(this.userFormGroup.valid ){//&& this.userFormGroup.value.password==this.userFormGroup.value.confirmPassword){
      console.log(this.userFormGroup.value);
      delete this.userFormGroup.confirmPassword;
      this.userDataService.updateUser(this.usrObj.id,this.userFormGroup.value).subscribe((data)=>{
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
