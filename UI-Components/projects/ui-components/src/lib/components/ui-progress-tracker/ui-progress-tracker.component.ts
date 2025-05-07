import { CommonModule } from '@angular/common';
import { Component, Input, Signal, computed, signal } from '@angular/core';

interface ProgressSection {
  icon: string;
  label: string;
  saved: number;
  total: number;
  active?: boolean;
}

@Component({
  selector: 'lib-ui-progress-tracker',
  templateUrl: './ui-progress-tracker.component.html',
  styleUrls: ['./ui-progress-tracker.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class UiProgressTrackerComponent {
  @Input() sections: { saved: number; total: number }[] = [];
}
