import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedTicketComponent } from './detailed-ticket.component';

describe('DetailedTicketComponent', () => {
  let component: DetailedTicketComponent;
  let fixture: ComponentFixture<DetailedTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
