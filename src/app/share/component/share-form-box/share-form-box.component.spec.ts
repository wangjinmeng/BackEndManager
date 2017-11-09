import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareFormBoxComponent } from './share-form-box.component';

describe('ShareFormBoxComponent', () => {
  let component: ShareFormBoxComponent;
  let fixture: ComponentFixture<ShareFormBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareFormBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareFormBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
