import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFormComponent } from './js-form.component';

describe('JsFormComponent', () => {
  let component: JsFormComponent;
  let fixture: ComponentFixture<JsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
