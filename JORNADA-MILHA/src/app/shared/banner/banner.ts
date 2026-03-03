import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {

  @Input() src : string = ''
  @Input() alt : string = ''

}
