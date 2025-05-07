import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireSidebarComponent } from './questionnaire-sidebar.component';

describe('QuestionnaireSidebarComponent', () => {
  let component: QuestionnaireSidebarComponent;
  let fixture: ComponentFixture<QuestionnaireSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionnaireSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnaireSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
