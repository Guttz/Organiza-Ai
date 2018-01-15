import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosClienteComponent } from './form-dados-cliente.component';

describe('FormDadosClienteComponent', () => {
  let component: FormDadosClienteComponent;
  let fixture: ComponentFixture<FormDadosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDadosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDadosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
