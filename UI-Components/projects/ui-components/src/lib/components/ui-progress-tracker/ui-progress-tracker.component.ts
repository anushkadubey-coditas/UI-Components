import { CommonModule } from '@angular/common';
import { Component, Input, Signal, computed, signal } from '@angular/core';
import { ProgressSection } from '../../../../../../src/app/shared/models';
import { ProgressTrackerService } from './progress-tracker.service';
import { MenuService } from '../../../../../../src/app/shared/services/menu.service';

@Component({
  selector: 'lib-ui-progress-tracker',
  templateUrl: './ui-progress-tracker.component.html',
  styleUrls: ['./ui-progress-tracker.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class UiProgressTrackerComponent {
  signalValue;
  constructor(
    private menuService: MenuService
    
  ) {
    this.signalValue = this.menuService.htmlSaved();
  }

  @Input({ required: true }) sectionsSignal!: Signal<ProgressSection[]>;
}
