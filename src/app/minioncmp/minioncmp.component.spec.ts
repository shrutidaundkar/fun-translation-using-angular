import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinioncmpComponent } from './minioncmp.component';

describe('MinioncmpComponent', () => {
  let component: MinioncmpComponent;
  let fixture: ComponentFixture<MinioncmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinioncmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinioncmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
