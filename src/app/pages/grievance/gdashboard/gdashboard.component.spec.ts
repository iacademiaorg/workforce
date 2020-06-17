import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GDashboardComponent } from './gdashboard.component';

describe('GDashboardComponent', () => {
  let component: GDashboardComponent;
  let fixture: ComponentFixture<GDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
