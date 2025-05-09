import { Component, inject, signal } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { Section } from '../../shared/models';  // Make sure Section is imported from the correct place
import { MenuService } from '../../shared/services/menu.service';
import { QuestionnaireFormComponent } from '../questionnaire-form/questionnaire-form.component';

@Component({
  selector: 'app-html-form',
  templateUrl: './html-form.component.html',
  styleUrls: ['./html-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, QuestionnaireFormComponent]
})
export class HtmlFormComponent {
  section = Section.HTML;

  questions = [
    {
      key: 'question1',
      label: 'What does HTML stand for?',
      type: 'text',
      placeholder: 'Type your answer here....'
    },
    {
      key: 'question2',
      label: 'Which tag is used to create a hyperlink?',
      type: 'radio',
      options: [
        { label: '<a>', value: 'a' },
        { label: '<link>', value: 'link' },
        { label: '<href>', value: 'href' },
        { label: '<url>', value: 'url' }
      ]
    },
    {
      key: 'question3',
      label: 'What is the purpose of the <meta> tag?',
      type: 'text',
      placeholder: 'Type your answer here....'
    },
    {
      key: 'question4',
      label: 'Which attribute is used to define inline styles?',
      type: 'radio',
      options: [
        { label: 'style', value: 'style' },
        { label: 'class', value: 'class' },
        { label: 'id', value: 'id' },
        { label: 'font', value: 'font' }
      ]
    },
    {
      key: 'question5',
      label: 'Which of the following are valid HTML5 semantic elements?',
      type: 'checkbox',
      options: [
        { label: '<article>', value: 'article' },
        { label: '<section>', value: 'section' },
        { label: '<header>', value: 'header' },
        { label: '<main>', value: 'main' },
        { label: '<div>', value: 'div' },
        { label: '<span>', value: 'span' }
      ]
    }
  ];

  constructor(private menuService: MenuService) {}

  submitQuestion(questionKey: string): void {
    this.menuService.increaseSaved(this.section, questionKey);
    console.log(`Submitted ${questionKey}`);
  }
}
