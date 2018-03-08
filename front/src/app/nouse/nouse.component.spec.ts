import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouseComponent } from './nouse.component';

describe('NouseComponent', () => {
  let component: NouseComponent;
  let fixture: ComponentFixture<NouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
