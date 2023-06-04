import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment2Component } from './experiment2.component';

describe('Experiment2Component', () => {
  let component: Experiment2Component;
  let fixture: ComponentFixture<Experiment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Experiment2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Experiment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
