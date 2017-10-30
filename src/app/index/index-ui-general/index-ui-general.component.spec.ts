import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexUiGeneralComponent } from './index-ui-general.component';

describe('IndexUiGeneralComponent', () => {
  let component: IndexUiGeneralComponent;
  let fixture: ComponentFixture<IndexUiGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexUiGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexUiGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
