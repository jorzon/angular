import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMneuComponent } from './side-mneu.component';

describe('SideMneuComponent', () => {
  let component: SideMneuComponent;
  let fixture: ComponentFixture<SideMneuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideMneuComponent]
    });
    fixture = TestBed.createComponent(SideMneuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
