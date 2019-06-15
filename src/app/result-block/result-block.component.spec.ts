import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBlockComponent } from './result-block.component';

describe('ResultBlockComponent', () => {
  let component: ResultBlockComponent;
  let fixture: ComponentFixture<ResultBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
