import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadenamientoOpcionalComponent } from './encadenamiento-opcional.component';

describe('EncadenamientoOpcionalComponent', () => {
  let component: EncadenamientoOpcionalComponent;
  let fixture: ComponentFixture<EncadenamientoOpcionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncadenamientoOpcionalComponent]
    });
    fixture = TestBed.createComponent(EncadenamientoOpcionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
