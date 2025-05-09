import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFormComponent } from './css-form.component';

describe('CssFormComponent', () => {
  let component: CssFormComponent;
  let fixture: ComponentFixture<CssFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
