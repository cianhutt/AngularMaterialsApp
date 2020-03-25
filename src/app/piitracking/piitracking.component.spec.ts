import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiitrackingComponent } from './piitracking.component';

describe('PiitrackingComponent', () => {
  let component: PiitrackingComponent;
  let fixture: ComponentFixture<PiitrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiitrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiitrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
