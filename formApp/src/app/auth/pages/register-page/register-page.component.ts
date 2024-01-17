import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailValidatorsService } from 'src/app/shared/validators/email-validators.service';
//import { cantBeStrider, emailPattern , firstNameAndLastnamePattern } from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {
  username: any;

  constructor(
    private fb: FormBuilder , 
    private validatorsService:ValidatorsService,
    private emailValidatorsService:EmailValidatorsService
    ) { }

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required , Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)], []],
    // email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [new EmailValidatorsService()]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidatorsService]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider], []],
    password1: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  },{
    validators : [
      this.validatorsService.isFieldOneEqualFieldTwo('password1' , 'password2')
    ]
  })


  isValidField(field: string) {
    //TODO: obtener validacion desde el servicio
    return this.validatorsService.isValidField(this.myForm , field)
  }

  onSubmit() {
    this.myForm.markAllAsTouched()
    console.log(this.myForm.controls)
  }
}



