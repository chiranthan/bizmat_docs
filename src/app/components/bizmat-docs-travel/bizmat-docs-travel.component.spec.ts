import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizmatDocsTravelComponent } from './bizmat-docs-travel.component';

describe('BizmatDocsTravelComponent', () => {
  let component: BizmatDocsTravelComponent;
  let fixture: ComponentFixture<BizmatDocsTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizmatDocsTravelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BizmatDocsTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
