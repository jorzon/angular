import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower: string = 'Jorzon'
  public nameUpper: string = 'JORZON'
  public fullName: string = 'jORZon'

  public customDate: Date = new Date()


} 
