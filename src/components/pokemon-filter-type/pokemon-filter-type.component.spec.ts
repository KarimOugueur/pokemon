import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFilterTypeComponent } from './pokemon-filter-type.component';

describe('PokemonFilterTypeComponent', () => {
  let component: PokemonFilterTypeComponent;
  let fixture: ComponentFixture<PokemonFilterTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonFilterTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFilterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
