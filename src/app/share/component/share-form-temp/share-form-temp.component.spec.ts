import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareFormTempComponent } from './share-form-temp.component';

describe('ShareFormTempComponent', () => {
  let component: ShareFormTempComponent;
  let fixture: ComponentFixture<ShareFormTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareFormTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareFormTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
