import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CannotFoundComponent } from './cannot-found.component';

describe('CannotFoundComponent', () => {
  let component: CannotFoundComponent;
  let fixture: ComponentFixture<CannotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CannotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CannotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
