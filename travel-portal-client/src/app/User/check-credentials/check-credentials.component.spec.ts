import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCredentialsComponent } from './check-credentials.component';

describe('CheckCredentialsComponent', () => {
  let component: CheckCredentialsComponent;
  let fixture: ComponentFixture<CheckCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
