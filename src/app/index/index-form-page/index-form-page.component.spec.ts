import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFormPageComponent } from './index-form-page.component';

describe('IndexFormPageComponent', () => {
  let component: IndexFormPageComponent;
  let fixture: ComponentFixture<IndexFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
