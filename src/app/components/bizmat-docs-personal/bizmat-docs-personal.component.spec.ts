import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizmatDocsPersonalComponent } from './bizmat-docs-personal.component';

describe('BizmatDocsPersonalComponent', () => {
  let component: BizmatDocsPersonalComponent;
  let fixture: ComponentFixture<BizmatDocsPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizmatDocsPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BizmatDocsPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
