import { NgIf } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
interface images{
  imgSrc:string
}
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  images:images[]=[
    {imgSrc:'./assets/img/images1.png'},
    {imgSrc:'./assets/img/images2.png'},
    {imgSrc:'./assets/img/images3.png'},
    {imgSrc:'./assets/img/images1.png'},
    {imgSrc:'./assets/img/images2.png'},
    {imgSrc:'./assets/img/images3.png'},
  ]
  isShow:boolean = false;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  

}

