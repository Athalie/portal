import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyPieComponent } from './energy-pie.component';

describe('EnergyPieComponent', () => {
  let component: EnergyPieComponent;
  let fixture: ComponentFixture<EnergyPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
