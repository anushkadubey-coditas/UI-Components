import { Component, OnInit } from '@angular/core';
//import { UiInputValidatedComponent } from '../../lib/components/custom-inputs/ui-input-validated/ui-input-validated.component';
//import { UiAutocompleteInputComponent } from '../../lib/components/custom-inputs/ui-autocomplete-input/ui-autocomplete-input.component';
//import { UiToggleButtonComponent } from '../../lib/components/custom-inputs/ui-toggle-button/ui-toggle-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiInputValidatedComponent } from '../../../projects/ui-components/src/lib/components/custom-input/ui-text-input-with-validation/ui-text-input-with-validation.component';

@Component({
  selector: 'ui-custom-input-preview',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UiInputValidatedComponent,
    //UiAutocompleteInputComponent
  ],
  templateUrl: './ui-custom-input-preview.component.html',
  styleUrls: ['./ui-custom-input-preview.component.scss']
})
export class UiCustomInputPreviewComponent implements OnInit {
  validatedInput = '';
  autocompleteModel = '';
  toggleState = false;
  currentTheme = 'light';

  ngOnInit() {
  }
}
