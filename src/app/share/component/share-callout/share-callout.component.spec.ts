import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCalloutComponent } from './share-callout.component';

describe('ShareCalloutComponent', () => {
  let component: ShareCalloutComponent;
  let fixture: ComponentFixture<ShareCalloutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareCalloutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareCalloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
