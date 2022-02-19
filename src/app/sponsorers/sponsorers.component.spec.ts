import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorersComponent } from './sponsorers.component';

describe('SponsorersComponent', () => {
  let component: SponsorersComponent;
  let fixture: ComponentFixture<SponsorersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
