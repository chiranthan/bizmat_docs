import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizmatDocsRentalComponent } from './bizmat-docs-rental.component';

describe('BizmatDocsRentalComponent', () => {
  let component: BizmatDocsRentalComponent;
  let fixture: ComponentFixture<BizmatDocsRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizmatDocsRentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BizmatDocsRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
