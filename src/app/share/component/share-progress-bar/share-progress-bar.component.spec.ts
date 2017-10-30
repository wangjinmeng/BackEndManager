import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProgressBarComponent } from './share-progress-bar.component';

describe('ShareProgressBarComponent', () => {
  let component: ShareProgressBarComponent;
  let fixture: ComponentFixture<ShareProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
