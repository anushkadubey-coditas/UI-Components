import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { UiTextInputComponent } from '../../../projects/ui-components/src/lib/components/input/ui-text-input/ui-text-input.component';
import { UiRadioComponent } from '../../../projects/ui-components/src/lib/components/input/ui-radio/ui-radio.component';
import { UiCheckboxComponent } from '../../../projects/ui-components/src/lib/components/input/ui-checkbox/ui-checkbox.component';
import { UiButtonComponent } from '../../../projects/ui-components/src/lib/components/button/ui-button/ui-button.component';
import { Section } from '../shared/models';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'app-html-form',
  templateUrl: './js-form.component.html',
  styleUrls: ['./js-form.component.scss'],
  standalone: true,
  imports: [
    UiTextInputComponent,
    UiRadioComponent,
    UiCheckboxComponent,
    ReactiveFormsModule,
    UiButtonComponent
  ]
})
export class JsFormComponent {
  constructor(
    private menuService: MenuService
  ) {}
  private fb = inject(NonNullableFormBuilder);
  selectedRadioValue = '';
  checkboxDefault = false;
  section = Section.CSS;

  form = this.fb.group({
    question1: [''],
    question2: this.fb.control(null),
    question3: [''],
    question4: this.fb.control(null),
    question5: this.fb.control<string[]>([]),
  });
  textValue = '';

  formSignal = toSignal(this.form.valueChanges, { initialValue: this.form.value });

  radioOptions1 = [
    { label: 'console.log()', value: 'console.log()' },
    { label: 'print()', value: 'print()' },
    { label: 'console.print()', value: 'console.print()' },
    { label: 'log()', value: 'log()' }
  ];

  radioOptions2 = [
    { label: 'push()', value: 'push()' },
    { label: 'append()', value: 'append()' },
    { label: 'add()', value: 'add()' },
    { label: 'insert()', value: 'insert()' },
  ];

  checkboxOptions = [
    { label: 'String', value: 'string' },
    { label: 'Number', value: 'number' },
    { label: 'Boolean', value: 'boolean' },
    { label: 'Object', value: 'object' },
    { label: 'Array', value: 'array' },
    { label: 'Function', value: 'function' }
  ];

  submitQuestion(section: Section) {
    this.menuService.increaseSaved(section);
  }
  getQuestionLabel(number: number, text: string): string {
    return `<span class="question-number">${number}</span> ${text}`;
  }
}
