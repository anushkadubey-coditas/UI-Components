import {
  Component,
  Input,
  Output,
  EventEmitter,
  inject,
  OnInit
} from '@angular/core';
import {
  NonNullableFormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { Section } from '../../shared/models';
import { UiButtonComponent } from '../../../../projects/ui-components/src/lib/components/button/ui-button/ui-button.component';
import { UiTextInputComponent } from '../../../../projects/ui-components/src/lib/components/input/ui-text-input/ui-text-input.component';
import { UiRadioComponent } from '../../../../projects/ui-components/src/lib/components/input/ui-radio/ui-radio.component';
import { UiCheckboxComponent } from '../../../../projects/ui-components/src/lib/components/input/ui-checkbox/ui-checkbox.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-questionnaire-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UiTextInputComponent,
    UiRadioComponent,
    UiCheckboxComponent,
    UiButtonComponent,
    CommonModule
  ],
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss']
})
export class QuestionnaireFormComponent implements OnInit {
  @Input() section!: Section;
  @Input() questions: any[] = [];
  @Input() heading: string = ''; 
  @Input() subheading: string = ''; 
  @Output() submitted = new EventEmitter<string>();

  private fb = inject(NonNullableFormBuilder);

  form: FormGroup = this.fb.group({});
  formSignal = toSignal(this.form.valueChanges, { initialValue: this.form.value });

  savedQuestions: { [key: string]: boolean } = {};

  ngOnInit(): void {
    for (const q of this.questions) {
      const defaultValue = q.type === 'checkbox' ? [] : '';
      this.form.addControl(q.key, this.fb.control(defaultValue));
      this.savedQuestions[q.key] = false;
      this.form.get(q.key)?.valueChanges.subscribe(() => this.resetButton(q.key));
    }
  }

  resetButton(key: string): void {
    if (this.savedQuestions[key]) {
      this.savedQuestions[key] = false;
    }
  }

  submitQuestion(questionKey: string): void {
    this.savedQuestions[questionKey] = true;
    this.submitted.emit(questionKey);
  }

  getControlValue(key: string): any {
    return this.form.get(key)?.value;
  }
}
