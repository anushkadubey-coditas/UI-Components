import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-autocomplete-input',
  standalone: true,
  imports: [CommonModule, FormsModule, TypeaheadModule],
  templateUrl: './ui-autocomplete-input.component.html',
  styleUrls: ['./ui-autocomplete-input.component.scss']
})
export class UiAutocompleteInputComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() suggestions: string[] = [];
  @Input() options: string[] = [];
  
  @Input() model: string = '';
  @Output() modelChange = new EventEmitter<string>();
  
  ngOnInit(): void {
    // If options is empty but suggestions is provided, use suggestions
    if (this.options.length === 0 && this.suggestions.length > 0) {
      this.options = [...this.suggestions];
    }
  }
  
  get selected(): string {
    return this.model;
  }
  
  set selected(value: string) {
    this.model = value;
    this.modelChange.emit(value);
  }
}
