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
  selector: 'app-css-form',
  imports: [
    UiTextInputComponent,
    UiRadioComponent,
    UiCheckboxComponent,
    ReactiveFormsModule,
    UiButtonComponent
  ],
  templateUrl: './css-form.component.html',
  styleUrl: './css-form.component.scss'
})
export class CssFormComponent {
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
    { label: 'color', value: 'color' },
    { label: 'text-color', value: 'text-color' },
    { label: 'font-color', value: 'font-color' },
    { label: 'text-style', value: 'text-style' }
  ];

  radioOptions2 = [
    { label: 'margin', value: 'margin' },
    { label: 'padding', value: 'padding' },
    { label: 'border', value: 'border' },
    { label: 'spacing', value: 'spacing' },
  ];

  checkboxOptions = [
    { label: '.class', value: '.class' },
    { label: '#id', value: '#id' },
    { label: 'element', value: 'element' },
    { label: '[attribute]', value: '[attribute]' },
    { label: '*', value: '*' },
    { label: ':hover', value: ':hover' }
  ];

  submitQuestion(section: Section) {
    this.menuService.increaseSaved(section);
  }
}
