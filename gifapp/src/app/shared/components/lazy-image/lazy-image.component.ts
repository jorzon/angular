import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  @Input() public url!: string 
  @Input() public alt: string = ''

  public hasLoaded: boolean = false

  ngOnInit(){
    if(!this.url) throw new Error('url is required')
  }

  onLoad(){
    console.log('Imagen loaded')
    this.hasLoaded = true
  }
}
