import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetemployeedataComponent } from './getemployeedata.component';

describe('GetemployeedataComponent', () => {
  let component: GetemployeedataComponent;
  let fixture: ComponentFixture<GetemployeedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetemployeedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetemployeedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
