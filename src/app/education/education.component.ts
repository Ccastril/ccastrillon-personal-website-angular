import { Component } from '@angular/core';
import cardContents from './test-data/education-data.json'
@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  cardContents;
  constructor(){
    this.cardContents = cardContents
  }
}
