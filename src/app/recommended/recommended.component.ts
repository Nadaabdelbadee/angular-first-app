import { Component } from '@angular/core';

interface images{
  name:string,
  cost:number,
  imgSrc:string
}
@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css'
})
export class RecommendedComponent {
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
    ]
}
