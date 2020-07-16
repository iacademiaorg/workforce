import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerLawsComponent } from './worker-laws.component';

describe('WorkerLawsComponent', () => {
  let component: WorkerLawsComponent;
  let fixture: ComponentFixture<WorkerLawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerLawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerLawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
