import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationProdComponent } from './application-prod.component';

describe('ApplicationProdComponent', () => {
  let component: ApplicationProdComponent;
  let fixture: ComponentFixture<ApplicationProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
