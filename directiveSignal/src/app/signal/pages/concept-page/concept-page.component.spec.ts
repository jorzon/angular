import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptPageComponent } from './concept-page.component';

describe('ConceptPageComponent', () => {
  let component: ConceptPageComponent;
  let fixture: ComponentFixture<ConceptPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConceptPageComponent]
    });
    fixture = TestBed.createComponent(ConceptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
