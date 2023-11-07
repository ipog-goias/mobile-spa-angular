import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaDetailComponent } from './empresa-detail.component';

describe('EmpresaDetailComponent', () => {
  let component: EmpresaDetailComponent;
  let fixture: ComponentFixture<EmpresaDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaDetailComponent]
    });
    fixture = TestBed.createComponent(EmpresaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
