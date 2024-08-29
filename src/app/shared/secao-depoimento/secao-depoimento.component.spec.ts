import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoDepoimentoComponent } from './secao-depoimento.component';

describe('SecaoDepoimentoComponent', () => {
  let component: SecaoDepoimentoComponent;
  let fixture: ComponentFixture<SecaoDepoimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoDepoimentoComponent]
    });
    fixture = TestBed.createComponent(SecaoDepoimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
