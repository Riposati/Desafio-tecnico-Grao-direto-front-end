import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicoRestauranteComponent } from './unico-restaurante.component';

describe('UnicoRestauranteComponent', () => {
  let component: UnicoRestauranteComponent;
  let fixture: ComponentFixture<UnicoRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnicoRestauranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicoRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
