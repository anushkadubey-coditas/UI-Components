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
  Validators,
} from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { Question, Section } from '../../shared/models';
import { UiButtonComponent } from '../../../../projects/ui-components/src/lib/components/button/ui-button/ui-button.component';
import { UiRadioComponent } from '../../../../projects/ui-components/src/lib/components/input/ui-radio/ui-radio.component';
import { UiCheckboxComponent } from '../../../../projects/ui-components/src/lib/components/input/ui-checkbox/ui-checkbox.component';
import { CommonModule } from '@angular/common';
import { UiTextareaComponent } from '../../../../projects/ui-components/src/lib/components/input/ui-textarea/ui-textarea.component';
@Component({
  selector: 'app-questionnaire-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UiTextareaComponent,
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
  @Input() questions: Question[] = [];
  @Input() heading: string = '';
  @Input() subheading: string = '';
  @Input() storageKey: string = 'saved-questionnaire';
  @Output() submitted = new EventEmitter<string>();

  private fb = inject(NonNullableFormBuilder);

  form: FormGroup = this.fb.group({});
  formSignal = toSignal(this.form.valueChanges, { initialValue: this.form.value });

  savedQuestions: { [key: string]: boolean } = {};

  ngOnInit(): void {
    const savedForm = localStorage.getItem(this.storageKey);
    const savedValues = savedForm ? JSON.parse(savedForm) : {};

    for (const q of this.questions) {
      const defaultValue = q.type === 'checkbox' ? [] : '';
      const validators = q.required ? [Validators.required] : [];
      const value = savedValues[q.key] ?? defaultValue;
      this.form.addControl(q.key, this.fb.control(value, validators));
      // this.form.addControl(q.key, this.fb.control(defaultValue, validators));
      this.savedQuestions[q.key] = !!value && (Array.isArray(value) ? value.length > 0 : value !== '');
      this.form.get(q.key)?.valueChanges.subscribe(() => {
        this.resetButton(q.key);
        this.saveFormState();
      });
      // this.form.get(q.key)?.valueChanges.subscribe(() => this.resetButton(q.key));
    } 
  }

  saveFormState(): void {
    if (this.storageKey) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.form.value));
    }
  }

  resetButton(key: string): void {
    if (this.savedQuestions[key]) {
      this.savedQuestions[key] = false;
    }
  }

  submitQuestion(question: Question): void {
    if(this.savedQuestions[question.key] || this.isControlEmpty(question.key, question.type)) return;
    const control = this.form.get(question.key);
    if (!control || control.invalid || this.savedQuestions[question.key]) return;
    this.savedQuestions[question.key] = true;
    this.submitted.emit(question.key);
    this.saveFormState(); 
  }

  getControlValue(key: string): any {
    return this.form.get(key)?.value;
  }

  isControlEmpty(key: string, type: string): boolean {
    const value = this.getControlValue(key);
    if (type === 'checkbox') {
      return !value || value.length === 0;
    }
    return !value;
  }
  
}
