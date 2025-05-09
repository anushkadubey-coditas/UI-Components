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
  templateUrl: './html-form.component.html',
  styleUrls: ['./html-form.component.scss'],
  standalone: true,
  imports: [
    UiTextInputComponent,
    UiRadioComponent,
    UiCheckboxComponent,
    ReactiveFormsModule,
    UiButtonComponent
  ]
})
export class HtmlFormComponent {
  constructor(
    private menuService: MenuService
  ) {}
  private fb = inject(NonNullableFormBuilder);
  selectedRadioValue = '';
  checkboxDefault = false;
  section = Section.HTML;

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
    { label: '<a>', value: 'a' },
    { label: '<link>', value: 'link' },
    { label: '<href>', value: 'href' },
    { label: '<url>', value: 'url' }
  ];

  radioOptions2 = [
    { label: 'style', value: 'style' },
    { label: 'class', value: 'class' },
    { label: 'id', value: 'id' },
    { label: 'font', value: 'font' },
  ];

  checkboxOptions = [
    { label: '<article>', value: 'article' },
    { label: '<section>', value: 'section' },
    { label: '<header>', value: 'header' },
    { label: '<main>', value: 'main' },
    { label: '<div>', value: 'div' },
    { label: '<span>', value: 'span' }
  ];

  submitQuestion(section: Section) {
    this.menuService.increaseSaved(section);
  }
  getQuestionLabel(number: number, text: string): string {
    return `<span class="question-number">${number}</span> ${text}`;
  }
}
