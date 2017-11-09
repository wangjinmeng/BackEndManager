import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTabBoxComponent } from './share-tab-box.component';

describe('ShareTabBoxComponent', () => {
  let component: ShareTabBoxComponent;
  let fixture: ComponentFixture<ShareTabBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareTabBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareTabBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
