import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKepPressComponent } from './test-kep-press.component';

describe('TestKepPressComponent', () => {
  let component: TestKepPressComponent;
  let fixture: ComponentFixture<TestKepPressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKepPressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKepPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
