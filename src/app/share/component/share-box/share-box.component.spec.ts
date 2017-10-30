import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareBoxComponent } from './share-box.component';

describe('ShareBoxComponent', () => {
  let component: ShareBoxComponent;
  let fixture: ComponentFixture<ShareBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
