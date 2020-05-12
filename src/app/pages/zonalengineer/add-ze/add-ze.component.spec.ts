import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZeComponent } from './add-ze.component';

describe('AddZeComponent', () => {
  let component: AddZeComponent;
  let fixture: ComponentFixture<AddZeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddZeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
