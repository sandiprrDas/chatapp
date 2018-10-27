import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFromComponent } from './chart-from.component';

describe('ChartFromComponent', () => {
  let component: ChartFromComponent;
  let fixture: ComponentFixture<ChartFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
