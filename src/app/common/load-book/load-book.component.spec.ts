import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadBookComponent } from './load-book.component';

describe('LoadBookComponent', () => {
  let component: LoadBookComponent;
  let fixture: ComponentFixture<LoadBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
