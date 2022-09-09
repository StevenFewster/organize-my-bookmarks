import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CExportComponent } from './c-export.component';

describe('CExportComponent', () => {
  let component: CExportComponent;
  let fixture: ComponentFixture<CExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
