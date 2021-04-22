import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPookdexComponent } from './pokemon-pookdex.component';

describe('PokemonPookdexComponent', () => {
  let component: PokemonPookdexComponent;
  let fixture: ComponentFixture<PokemonPookdexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonPookdexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPookdexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
