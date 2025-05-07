import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { UiTextInputComponent } from '../../../projects/ui-components/src/lib/components/input/ui-text-input/ui-text-input.component';
import { UiRadioComponent } from '../../../projects/ui-components/src/lib/components/input/ui-radio/ui-radio.component';
import { UiCheckboxComponent } from '../../../projects/ui-components/src/lib/components/input/ui-checkbox/ui-checkbox.component';
import { UiButtonComponent } from '../../../projects/ui-components/src/lib/components/button/ui-button/ui-button.component';

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
  private fb = inject(NonNullableFormBuilder);
  selectedRadioValue = '';

  form = this.fb.group({
    question1: [''],
    question2: this.fb.control(null),
    question3: [''],
    question4: [''],
    question5: [[]],
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
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
  ];

  checkboxOptions = [
    { label: 'Choice 1', value: 'c1' },
    { label: 'Choice 2', value: 'c2' },
    { label: 'Choice 3', value: 'c3' },
  ];

  submitQuestion(key: keyof typeof this.form.controls) {
    const value = this.form.get(key)?.value;
    console.log(`Submitted ${key}:`, value);
  }
}
