import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiratecmpComponent } from './piratecmp.component';

describe('PiratecmpComponent', () => {
  let component: PiratecmpComponent;
  let fixture: ComponentFixture<PiratecmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiratecmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiratecmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
