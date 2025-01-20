import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-eight222',
  templateUrl: './eight222.component.html',
  styleUrl: './eight222.component.css'
})
export class Eight222Component implements OnInit, OnDestroy{

 
  // ///////////////////////////////////////////////
//   list=[
//     {
//       uname:"Prabu P",
//       spell:"“The app is very smooth and easy to use. Every ride I take, I have complete clarity and transparency unlike other apps. Also there is no surge in this app which is awesome! Anytime of the day I choose to travel, I see the same prices!”",
//       imgAdd:"https://nammayatri.in/img/customer-2.png"
//     },
//     {
//       uname:"Sudheer",
//       spell:"“I use Namma Yatri everyday for my office commute. I understood while talking to drivers that it is an app made by the driver community. My entire trip amount goes to the drivers without any commission taken by anyone. I’m very happy with the app.”",
//       imgAdd:"https://nammayatri.in/img/customer-3.png"
//     },
//     {
//       uname:"Aswin Sekar",
//       spell:"“Namma Yatri has been a saviour for me. In Bangalore, getting autos is very difficult. But whenever I search for auto in Namma Yatri, I always get an auto and that too very quickly. Congratulations to the entire team who has built the app.”",
//       imgAdd:"https://nammayatri.in/img/customer-4.png"
//     },

// ]
uname="Prabu P"
spell="“The app is very smooth and easy to use. Every ride I take, I have complete clarity and transparency unlike other apps. Also there is no surge in this app which is awesome! Anytime of the day I choose to travel, I see the same prices!”"
imgAdd="https://nammayatri.in/img/customer-2.png"



  imgAdd1 = 'https://nammayatri.in/img/customer-2.png';
  imgAdd2 = 'https://nammayatri.in/img/customer-3.jpeg';
  imgAdd3 = 'https://nammayatri.in/img/customer-4.png';
  images = [this.imgAdd1, this.imgAdd2, this.imgAdd3];
  currentImage = this.images[0];
  private imageIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }
  // ngOnInit(): void {
  //   this.preloadImages();
  //   this.startImageRotation();
  // }

  // ngOnDestroy(): void {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }

  // preloadImages(): void {
  //   this.images.forEach((src) => {
  //     const img = new Image();
  //     img.src = src;
  //   });
  // }

  // startImageRotation(): void {
  //   this.intervalId = setInterval(() => {
  //     this.imageIndex = (this.imageIndex + 1) % this.images.length;
  //     this.currentImage = this.images[this.imageIndex];
  //   }, 2000);
  // }
}
