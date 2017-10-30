import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareAlertComponent } from './share-alert.component';

describe('ShareAlertComponent', () => {
  let component: ShareAlertComponent;
  let fixture: ComponentFixture<ShareAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
