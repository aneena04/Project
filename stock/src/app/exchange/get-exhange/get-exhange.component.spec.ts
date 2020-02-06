import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetExhangeComponent } from './get-exhange.component';

describe('GetExhangeComponent', () => {
  let component: GetExhangeComponent;
  let fixture: ComponentFixture<GetExhangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetExhangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetExhangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
