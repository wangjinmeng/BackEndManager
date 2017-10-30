import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSidebarComponent } from './index-sidebar.component';

describe('IndexSidebarComponent', () => {
  let component: IndexSidebarComponent;
  let fixture: ComponentFixture<IndexSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
