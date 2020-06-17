import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseRecentComponent } from './browse-recent.component';

describe('BrowseRecentComponent', () => {
  let component: BrowseRecentComponent;
  let fixture: ComponentFixture<BrowseRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
