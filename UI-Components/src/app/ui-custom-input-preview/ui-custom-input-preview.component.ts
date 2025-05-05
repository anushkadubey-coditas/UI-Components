import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiInputValidatedComponent } from '../../../projects/ui-components/src/lib/components/custom-input/ui-text-input-with-validation/ui-text-input-with-validation.component';
import { UiAutocompleteInputComponent } from '../../../projects/ui-components/src/lib/components/custom-input/ui-autocomplete-input/ui-autocomplete-input.component';
import { UiToggleButtonComponent } from '../../../projects/ui-components/src/lib/components/custom-input/ui-toggle-button/ui-toggle-button.component';

@Component({
  selector: 'ui-custom-input-preview',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UiInputValidatedComponent,
    UiAutocompleteInputComponent,
    UiToggleButtonComponent
  ],
  templateUrl: './ui-custom-input-preview.component.html',
  styleUrls: ['./ui-custom-input-preview.component.scss']
})
export class UiCustomInputPreviewComponent implements OnInit {
  validatedInput = '';
  autocompleteModel = '';
  toggleState = false;
  suggestions = ['Anushka', 'Himanshu', 'Arya', 'Shivam', 'Karan', 'Shubham'];

  ngOnInit() {
  }
}
