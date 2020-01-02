import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadExcelToDBComponent } from './upload-excel-to-db.component';

describe('UploadExcelToDBComponent', () => {
  let component: UploadExcelToDBComponent;
  let fixture: ComponentFixture<UploadExcelToDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadExcelToDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadExcelToDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
