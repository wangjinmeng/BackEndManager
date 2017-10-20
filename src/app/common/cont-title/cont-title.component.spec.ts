import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContTitleComponent } from './cont-title.component';

describe('ContTitleComponent', () => {
  let component: ContTitleComponent;
  let fixture: ComponentFixture<ContTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
