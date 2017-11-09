import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTreePageComponent } from './index-tree-page.component';

describe('IndexTreePageComponent', () => {
  let component: IndexTreePageComponent;
  let fixture: ComponentFixture<IndexTreePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTreePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
