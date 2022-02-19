import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLibraryServicesComponent } from './public-library-services.component';

describe('PublicLibraryServicesComponent', () => {
  let component: PublicLibraryServicesComponent;
  let fixture: ComponentFixture<PublicLibraryServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicLibraryServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLibraryServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
