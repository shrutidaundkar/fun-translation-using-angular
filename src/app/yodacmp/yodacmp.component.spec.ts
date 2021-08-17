import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YodacmpComponent } from './yodacmp.component';

describe('YodacmpComponent', () => {
  let component: YodacmpComponent;
  let fixture: ComponentFixture<YodacmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YodacmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YodacmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
