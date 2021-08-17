import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecmpComponent } from './homecmp.component';

describe('HomecmpComponent', () => {
  let component: HomecmpComponent;
  let fixture: ComponentFixture<HomecmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
