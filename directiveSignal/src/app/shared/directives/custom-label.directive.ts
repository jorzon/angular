import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>
  private _color: string = 'pink'

  private _errors?: ValidationErrors | null

  @Input() set color(value: string) {
    this._color = value
    this.setStyle()
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value
    console.log(value)
    this.setErrorMessage()
  }

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('constructor de la directiva', el)
    this.htmlElement = el
  }

  setStyle() {
    if (!this.htmlElement) return
    this.htmlElement.nativeElement.style.color = this._color
  }

  ngOnInit(): void {
    console.log('directiva - ngOnInit')
    this.setStyle()
  }


  setErrorMessage(): void {
    if (!this.htmlElement) return

    if (!this._errors) {
      this.htmlElement.nativeElement.innerHTML = 'No hay errores'
      this.htmlElement.nativeElement.style.color = 'green'
      this.htmlElement.nativeElement.style.fontWeight = 'bold'
      return
    }

    const errors = Object.keys(this._errors)

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.style.color = 'red'
      this.htmlElement.nativeElement.innerHTML = 'Este campo es obligatorio'
      return
    }

    if (errors.includes('minlength')) {
      this.htmlElement.nativeElement.style.color = 'red'
      var characterReq = this._errors['minlength'].requiredLength
      var characterLess = this._errors['minlength'].actualLength
      this.htmlElement.nativeElement.innerHTML = ` Este campo requiere ${characterReq} caracteres, aun te falta ${characterReq - characterLess} caracteres`
      return
    }


    if (errors.includes('email')) {
      this.htmlElement.nativeElement.style.color = 'red'
      this.htmlElement.nativeElement.innerHTML = 'Este campo es formato de correo'
      return
    }



  }


}
