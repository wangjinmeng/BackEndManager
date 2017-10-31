import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareFormTextComponent } from './share-form-text.component';

describe('ShareFormTextComponent', () => {
  let component: ShareFormTextComponent;
  let fixture: ComponentFixture<ShareFormTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareFormTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareFormTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
