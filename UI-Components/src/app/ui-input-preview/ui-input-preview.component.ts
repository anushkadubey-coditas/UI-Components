import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTextInputComponent } from '../../../projects/ui-components/src/lib/components/input/ui-text-input/ui-text-input.component';
import { UiSelectComponent } from '../../../projects/ui-components/src/lib/components/input/ui-select/ui-select.component';
import { UiRadioComponent } from '../../../projects/ui-components/src/lib/components/input/ui-radio/ui-radio.component';
import { UiCheckboxComponent } from '../../../projects/ui-components/src/lib/components/input/ui-checkbox/ui-checkbox.component';

//import { UiRadioGroupComponent } from '../ui-radio-group/ui-radio-group.component';
// import { UiCheckboxComponent } from '../ui-checkbox/ui-checkbox.component';

@Component({
  selector: 'ui-input-preview',
  standalone: true,
  imports: [
    CommonModule,
    UiTextInputComponent,
    UiSelectComponent,
    UiRadioComponent,
    UiCheckboxComponent
  ],
  templateUrl: './ui-input-preview.component.html',
  styleUrls: ['./ui-input-preview.component.scss']
})
export class UiInputPreviewComponent {
  textValue = '';
  selectedOption = '';
  selectedRadioValue = '';
  checkboxDefault = false;
  checkboxIndeterminate = false;

  selectOptions = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' }
  ];

  radioOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' }
  ];
}
