import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMenusComponent } from './public-menus.component';

describe('PublicMenusComponent', () => {
  let component: PublicMenusComponent;
  let fixture: ComponentFixture<PublicMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
