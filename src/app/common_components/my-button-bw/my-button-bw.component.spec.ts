import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyButtonBwComponent } from './my-button-bw.component';

describe('MyButtonBwComponent', () => {
  let component: MyButtonBwComponent;
  let fixture: ComponentFixture<MyButtonBwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyButtonBwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyButtonBwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
