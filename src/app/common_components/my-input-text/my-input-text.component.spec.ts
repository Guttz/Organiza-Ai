import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputTextComponent } from './my-input-text.component';

describe('MyInputTextComponent', () => {
  let component: MyInputTextComponent;
  let fixture: ComponentFixture<MyInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
