import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import cardsCollection from './test-data/mockCardsData.json';
@Component({
  selector: 'app-scrolling-gallery',
  standalone: true,
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
    console.log(this.card);
    setTimeout(()=> {
      // console.log(this.card?.nativeElement.getBoundingClientRect());
      // console.log(this.card?.nativeElement.getAttributeNode('data-bs-toggle'));
      // console.log(this.card?.nativeElement.getAttribute('class'));
      // this.card?.nativeElement.setAttribute('class', 'card-body show');

    }, 1000);
    
  }

}

