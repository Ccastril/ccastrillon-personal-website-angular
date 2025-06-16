import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import cardsCollection from './test-data/mockCardsData.json';
@Component({
    selector: 'app-scrolling-gallery',
    imports: [],
    templateUrl: './scrolling-gallery.component.html',
    styleUrl: './scrolling-gallery.component.css'
})
export class ScrollingGalleryComponent implements AfterViewInit {
  cardsList:any[];
  constructor() {
    this.cardsList = cardsCollection;
  }
  @ViewChild('cardBodyControl')card:ElementRef<HTMLElement> | undefined
  ngAfterViewInit() {
  
  }
  goToLink = (url:string):void => {
    window.open(url)
  }

}

