import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InEvidenzaComponent } from './in-evidenza.component';

describe('InEvidenzaComponent', () => {
  let component: InEvidenzaComponent;
  let fixture: ComponentFixture<InEvidenzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InEvidenzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InEvidenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
