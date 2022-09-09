import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AUploadComponent } from './a-upload.component';

describe('AUploadComponent', () => {
  let component: AUploadComponent;
  let fixture: ComponentFixture<AUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
