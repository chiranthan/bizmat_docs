import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizmatDocsLoginComponent } from './bizmat-docs-login.component';

describe('BizmatDocsLoginComponent', () => {
  let component: BizmatDocsLoginComponent;
  let fixture: ComponentFixture<BizmatDocsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizmatDocsLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BizmatDocsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
