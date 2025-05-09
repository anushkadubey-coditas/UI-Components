import { Component } from '@angular/core';
import { Section } from '../../shared/models';
import { MenuService } from '../../shared/services/menu.service';
import { QuestionnaireFormComponent } from '../questionnaire-form/questionnaire-form.component';

@Component({
  selector: 'app-js-form',
  standalone: true,
  imports: [QuestionnaireFormComponent],
  templateUrl: './js-form.component.html',
  styleUrls: ['./js-form.component.scss']
})
export class JsFormComponent {
  section = Section.JS;

  questions = [
    {
      key: 'question1',
      label: 'What is JavaScript used for?',
      type: 'text',
      placeholder: 'Type your answer here....'
    },
    {
      key: 'question2',
      label: 'Which function is used to print output to the browser console?',
      type: 'radio',
      options: [
        { label: 'console.log()', value: 'console.log()' },
        { label: 'print()', value: 'print()' },
        { label: 'console.print()', value: 'console.print()' },
        { label: 'log()', value: 'log()' }
      ]
    },
    {
      key: 'question3',
      label: 'What is the difference between `var`, `let`, and `const`?',
      type: 'text',
      placeholder: 'Type your answer here....'
    },
    {
      key: 'question4',
      label: 'Which method adds a new element to the end of an array?',
      type: 'radio',
      options: [
        { label: 'push()', value: 'push()' },
        { label: 'append()', value: 'append()' },
        { label: 'add()', value: 'add()' },
        { label: 'insert()', value: 'insert()' }
      ]
    },
    {
      key: 'question5',
      label: 'Which of the following are JavaScript data types?',
      type: 'checkbox',
      options: [
        { label: 'String', value: 'string' },
        { label: 'Number', value: 'number' },
        { label: 'Boolean', value: 'boolean' },
        { label: 'Object', value: 'object' },
        { label: 'Array', value: 'array' },
        { label: 'Function', value: 'function' }
      ]
    }
  ];

  constructor(private menuService: MenuService) {}

  submitQuestion(questionKey: string): void {
    this.menuService.increaseSaved(this.section, questionKey);
    console.log(`JS Question submitted: ${questionKey}`);
  }
}
