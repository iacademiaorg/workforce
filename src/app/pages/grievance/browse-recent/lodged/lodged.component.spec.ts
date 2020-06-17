import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgedComponent } from './lodged.component';

describe('LodgedComponent', () => {
  let component: LodgedComponent;
  let fixture: ComponentFixture<LodgedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
