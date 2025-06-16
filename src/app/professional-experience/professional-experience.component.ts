import { Component } from '@angular/core';
import cardsCollection from './test-data/data-loader.json';

@Component({
    selector: 'app-professional-experience',
    imports: [],
    templateUrl: './professional-experience.component.html',
    styleUrl: './professional-experience.component.css'
})
export class ProfessionalExperienceComponent {
    cardsList:any[];
    constructor(){
        this.cardsList = cardsCollection
    }
    goToLink =(url: string):any => { 
        window.open(url)
    }
}
