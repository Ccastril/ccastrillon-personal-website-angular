import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingGalleryComponent } from './scrolling-gallery.component';

describe('ScrollingGalleryComponent', () => {
  let component: ScrollingGalleryComponent;
  let fixture: ComponentFixture<ScrollingGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollingGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollingGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
