import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfoOrcamentoComponent } from './form-info-orcamento.component';

describe('FormInfoOrcamentoComponent', () => {
  let component: FormInfoOrcamentoComponent;
  let fixture: ComponentFixture<FormInfoOrcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInfoOrcamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInfoOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
