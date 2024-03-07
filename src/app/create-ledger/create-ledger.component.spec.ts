import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLedgerComponent } from './create-ledger.component';

describe('CreateLedgerComponent', () => {
  let component: CreateLedgerComponent;
  let fixture: ComponentFixture<CreateLedgerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLedgerComponent]
    });
    fixture = TestBed.createComponent(CreateLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
