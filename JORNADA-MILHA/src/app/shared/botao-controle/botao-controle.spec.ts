import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoControle } from './botao-controle';

describe('BotaoControle', () => {
  let component: BotaoControle;
  let fixture: ComponentFixture<BotaoControle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoControle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoControle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
