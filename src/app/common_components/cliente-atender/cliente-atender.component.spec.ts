import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAtenderComponent } from './cliente-atender.component';

describe('ClienteAtenderComponent', () => {
  let component: ClienteAtenderComponent;
  let fixture: ComponentFixture<ClienteAtenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAtenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAtenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
