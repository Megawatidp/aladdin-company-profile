import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainframeUnixComponent } from './mainframe-unix.component';

describe('MainframeUnixComponent', () => {
  let component: MainframeUnixComponent;
  let fixture: ComponentFixture<MainframeUnixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainframeUnixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainframeUnixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
