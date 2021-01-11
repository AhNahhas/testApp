import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('video', {static : false}) video : ElementRef;

  constructor() {}

  ngOnInit() {

    fromEvent(document, 'keyup').subscribe((e : any) => {
      
      if(e.which === 13) {

        console.log('Playing video');
        this.video.nativeElement.play();

      }

    });

  }

}
