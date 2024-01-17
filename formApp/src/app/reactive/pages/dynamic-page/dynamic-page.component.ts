import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent  {

  constructor(private fb: FormBuilder) { }


  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)], []],
    favoriteGames: this.fb.array([
      ['Metal Gear', [Validators.required], []],
      ['Death Strangin', [Validators.required], []]
    ])
  })

  public newFavorite: FormControl = new FormControl('' , [] , [])

  public test:FormControl = new FormControl('')

  get favorites() {
    return this.myForm.get('favoriteGames') as FormArray
  }


  isValidFieldArray(FormArray : FormArray , i: number){
    return FormArray.controls[i].errors && FormArray.controls[i].touched
  }


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


  onDeleteFavorite(i:number):void{
    this.favorites.removeAt(i)
  }


  onAddToFavorite():void{
    if(this.newFavorite.invalid) return
    const newGame = this.newFavorite.value

    //this.favorites.push(new FormControl (newGame , Validators.required))

    this.favorites.push(
      this.fb.control(newGame , Validators.required)
    )

    this.newFavorite.reset()
    
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }

    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([])
    this.myForm.reset()
  }


}
