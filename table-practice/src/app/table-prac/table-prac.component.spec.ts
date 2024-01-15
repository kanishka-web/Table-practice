import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePracComponent } from './table-prac.component';

describe('TablePracComponent', () => {
  let component: TablePracComponent;
  let fixture: ComponentFixture<TablePracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
