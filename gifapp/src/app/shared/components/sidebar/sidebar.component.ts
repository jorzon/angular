import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get tags():string[] {
    return this.GifsService.tagHistory
  }


  constructor(private GifsService: GifsService) {

  }


  getGif(tag:string):void{
    this.GifsService.searchTag(tag)
  }








}
