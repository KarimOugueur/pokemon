import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAccueilComponent } from './pokemon-accueil.component';

describe('PokemonAccueilComponent', () => {
  let component: PokemonAccueilComponent;
  let fixture: ComponentFixture<PokemonAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
