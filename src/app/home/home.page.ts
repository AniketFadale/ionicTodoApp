import {OnInit, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  sliderConfig = {
    spaceBetween:  1,
    slidesPerView: 1.7
  } 

  constructor() {

  }
  ngOnInit(): void {
   
  }


}
