import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('tag')
  public tagInput!: ElementRef<HTMLInputElement>

  searchTag():void{
    const newTag = this.tagInput.nativeElement.value
    this.GifsService.searchTag(newTag)
    this.tagInput.nativeElement.value=''
  }

  constructor( private GifsService: GifsService){

  }
}
