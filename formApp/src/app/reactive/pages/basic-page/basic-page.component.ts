import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';

const rxt = {
  name: 'RXT 5090',
  price: 2500,
  inStorage: 10
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  constructor(private fb: FormBuilder){}
  
  //PODEMOS MANDAR DATOS DESDE QUE CARGA LA VISTA CON EL RESET Y EL ONINIT
  ngOnInit(): void {
    //this.myForm.reset(rxt)
  }

  // public myForm: FormGroup = new FormGroup({
  //nombre: new FormControl ('valor inicial' , [validacion sincrona] , [validacion asincrona])
  //   name: new FormControl('' , [] , []),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0)
  // })


  public myForm: FormGroup = this.fb.group({
    //nombre:['valor inicial' , [validacion sincrona] , [validacion asincrona]]
    name: ['' , [Validators.required , Validators.minLength(3)] , []],
    price: [0 , [Validators.required , Validators.min(0)]],
    inStorage: [0 , [Validators.required , Validators.min(0)]]
  })
  


  isValidField(field:string):boolean | null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  getFieldError(field:string):string | null{
    if(!this.myForm.controls[field]) return null
    const errors = this.myForm.controls[field].errors || {}
    for(const key of Object.keys(errors)){
      switch(key){
        case'required' : 
          return 'Este campo es requerido';
        case 'minlength' :
          return `Minimo ${errors['minlength'].requiredLength} caracteres`
      }
    }
    return null
  }





  onSave():void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return
    }
    console.log(this.myForm.value)
    this.myForm.reset({
      price: 0,
      inStorage: 0
    })
  }

  

}
