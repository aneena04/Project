import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewIpoComponent } from './user-view-ipo.component';

describe('UserViewIpoComponent', () => {
  let component: UserViewIpoComponent;
  let fixture: ComponentFixture<UserViewIpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewIpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
