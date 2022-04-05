import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTableLineComponent } from './detail-table-line.component';

describe('DetailTableLineComponent', () => {
  let component: DetailTableLineComponent;
  let fixture: ComponentFixture<DetailTableLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTableLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTableLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
