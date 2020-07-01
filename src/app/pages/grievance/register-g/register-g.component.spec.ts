import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGComponent } from './register-g.component';

describe('RegisterGComponent', () => {
  let component: RegisterGComponent;
  let fixture: ComponentFixture<RegisterGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
