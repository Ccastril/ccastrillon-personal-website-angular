import { Routes } from '@angular/router';
import { ScrollingGalleryComponent } from './scrolling-gallery/scrolling-gallery.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { EducationComponent } from './education/education.component';
import { CertificationsComponent } from './certifications/certifications.component';

export const routes: Routes = [
    {
        path:'',
        component: ScrollingGalleryComponent
    },
    {
        path:'professional-experience',
        component: ProfessionalExperienceComponent
    },
    {
        path:'education',
        component: EducationComponent
    },
    {
        path:'certifications',
        component: CertificationsComponent
    }
];


