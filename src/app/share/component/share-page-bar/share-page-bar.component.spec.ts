import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePageBarComponent } from './share-page-bar.component';

describe('SharePageBarComponent', () => {
  let component: SharePageBarComponent;
  let fixture: ComponentFixture<SharePageBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharePageBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
