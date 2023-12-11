import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-loading-spiner',
  templateUrl: './loading-spiner.component.html',
  styleUrls: ['./loading-spiner.component.css']
})
export class LoadingSpinerComponent {
  @Input() public titleFind?:string
}
