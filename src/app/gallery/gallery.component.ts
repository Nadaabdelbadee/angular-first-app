import { Component } from '@angular/core';
import { RecommendedComponent } from '../recommended/recommended.component';
interface images{
  name:string,
  cost:number,
  imgSrc:string
}
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendedComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
imgs:images[]=[
  {name:'home' , cost:2000 , imgSrc:'./assets/img/images1.png'},
  {name:'chesseCake' , cost:20 , imgSrc:'./assets/img/images2.png'},
  {name:'circus' , cost:200 , imgSrc:'./assets/img/images3.png'},
  {name:'home' , cost:2000 , imgSrc:'./assets/img/images1.png'},
  {name:'chesseCake' , cost:20 , imgSrc:'./assets/img/images2.png'},
  {name:'circus' , cost:200 , imgSrc:'./assets/img/images3.png'},
  {name:'home' , cost:2000 , imgSrc:'./assets/img/images1.png'},
  {name:'chesseCake' , cost:20 , imgSrc:'./assets/img/images2.png'},
  {name:'circus' , cost:200 , imgSrc:'./assets/img/images3.png'},
  {name:'home' , cost:2000 , imgSrc:'./assets/img/images1.png'},
  {name:'chesseCake' , cost:20 , imgSrc:'./assets/img/images2.png'},
  {name:'circus' , cost:200 , imgSrc:'./assets/img/images3.png'},
]
}
