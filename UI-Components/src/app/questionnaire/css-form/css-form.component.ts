import { Component } from '@angular/core';
import { Section } from '../../shared/models';
import { MenuService } from '../../shared/services/menu.service';
import { QuestionnaireFormComponent } from '../questionnaire-form/questionnaire-form.component';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-css-form',
  standalone: true,
  imports: [ReactiveFormsModule, QuestionnaireFormComponent],
  templateUrl: './css-form.component.html',
  styleUrl: './css-form.component.scss'
})
export class CssFormComponent {
  section = Section.CSS;

  questions = [
    {
      key: 'question1',
      label: 'What does CSS stand for?',
      type: 'text',
      placeholder: 'Type your answer here....'
    },
    {
      key: 'question2',
      label: 'Which property is used to change text color in CSS?',
      type: 'radio',
      options: [
        { label: 'color', value: 'color' },
        { label: 'text-color', value: 'text-color' },
        { label: 'font-color', value: 'font-color' },
        { label: 'text-style', value: 'text-style' }
      ]
    },
    {
      key: 'question3',
      label: 'What does the "Cascading" in CSS mean?',
      type: 'text',
      placeholder: 'Type your answer here....'
    },
    {
      key: 'question4',
      label: 'Which property sets the space inside the border of an element?',
      type: 'radio',
      options: [
        { label: 'margin', value: 'margin' },
        { label: 'padding', value: 'padding' },
        { label: 'border', value: 'border' },
        { label: 'spacing', value: 'spacing' }
      ]
    },
    {
      key: 'question5',
      label: 'Which of the following are valid CSS selectors?',
      type: 'checkbox',
      options: [
        { label: '.class', value: '.class' },
        { label: '#id', value: '#id' },
        { label: 'element', value: 'element' },
        { label: '[attribute]', value: '[attribute]' },
        { label: '*', value: '*' },
        { label: ':hover', value: ':hover' }
      ]
    }
  ];

  constructor(private menuService: MenuService) {}

  submitQuestion(questionKey: string): void {
    this.menuService.increaseSaved(this.section, questionKey);
    console.log(`CSS Question submitted: ${questionKey}`);
  }
}
