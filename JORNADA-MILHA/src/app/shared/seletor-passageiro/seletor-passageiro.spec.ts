import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorPassageiro } from './seletor-passageiro';

describe('SeletorPassageiro', () => {
  let component: SeletorPassageiro;
  let fixture: ComponentFixture<SeletorPassageiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeletorPassageiro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeletorPassageiro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
