import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BOrganizeComponent } from './b-organize.component';

describe('BOrganizeComponent', () => {
  let component: BOrganizeComponent;
  let fixture: ComponentFixture<BOrganizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BOrganizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BOrganizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
