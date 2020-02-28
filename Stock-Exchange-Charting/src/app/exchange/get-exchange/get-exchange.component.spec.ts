import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetExchangeComponent } from './get-exchange.component';

describe('GetExchangeComponent', () => {
  let component: GetExchangeComponent;
  let fixture: ComponentFixture<GetExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
