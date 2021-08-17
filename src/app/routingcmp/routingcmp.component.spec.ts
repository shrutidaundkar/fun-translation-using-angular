import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingcmpComponent } from './routingcmp.component';

describe('RoutingcmpComponent', () => {
  let component: RoutingcmpComponent;
  let fixture: ComponentFixture<RoutingcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingcmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
