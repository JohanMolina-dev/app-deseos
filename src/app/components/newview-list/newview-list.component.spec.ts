import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewviewListComponent } from './newview-list.component';

describe('NewviewListComponent', () => {
  let component: NewviewListComponent;
  let fixture: ComponentFixture<NewviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewviewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
