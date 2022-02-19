import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLibraryHomeComponent } from './public-library-home.component';

describe('PublicLibraryHomeComponent', () => {
  let component: PublicLibraryHomeComponent;
  let fixture: ComponentFixture<PublicLibraryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicLibraryHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLibraryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
