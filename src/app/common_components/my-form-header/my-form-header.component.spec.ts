import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormHeaderComponent } from './my-form-header.component';

describe('MyFormHeaderComponent', () => {
  let component: MyFormHeaderComponent;
  let fixture: ComponentFixture<MyFormHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
