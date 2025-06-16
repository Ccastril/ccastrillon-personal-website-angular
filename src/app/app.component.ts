import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, BannerComponent, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ccastrillon-personal-website-angular';
}
