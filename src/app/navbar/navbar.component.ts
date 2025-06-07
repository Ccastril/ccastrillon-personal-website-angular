import { Component } from '@angular/core';
import { ScrollingGalleryComponent } from '../scrolling-gallery/scrolling-gallery.component';
import { ProfessionalExperienceComponent } from '../professional-experience/professional-experience.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ScrollingGalleryComponent, ProfessionalExperienceComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
