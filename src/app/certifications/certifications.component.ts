import { Component } from '@angular/core';
import cardContents from './cert-data/cert-data.json'
@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  cardContents;
  
  constructor(){
    this.cardContents = cardContents
  }
}
