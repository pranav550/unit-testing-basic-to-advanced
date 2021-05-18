import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcherArrayTestComponent } from './matcher-array-test.component';

describe('MatcherArrayTestComponent', () => {
  let component: MatcherArrayTestComponent;
  let fixture: ComponentFixture<MatcherArrayTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatcherArrayTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcherArrayTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
