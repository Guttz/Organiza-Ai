import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputSelectComponent } from './my-input-select.component';

describe('MyInputSelectComponent', () => {
  let component: MyInputSelectComponent;
  let fixture: ComponentFixture<MyInputSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInputSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
