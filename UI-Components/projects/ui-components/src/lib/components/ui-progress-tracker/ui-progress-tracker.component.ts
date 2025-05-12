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

  ngOnInit(): void {
    this.restoreProgressFromLocalStorage();
  }

  private restoreProgressFromLocalStorage(): void {
    const localStorageKeys = [
      { sectionKey: 'html', storageKey: 'saved-html-questionnaire' },
      { sectionKey: 'css', storageKey: 'saved-css-questionnaire' },
      { sectionKey: 'js', storageKey: 'saved-js-questionnaire' }
    ];

    const sections = this.sectionsSignal();

    localStorageKeys.forEach(({ sectionKey, storageKey }) => {
      const section = sections.find(s => s.key === sectionKey);
      if (!section) return;

      const savedData = localStorage.getItem(storageKey);
      if (!savedData) return;

      try {
        const parsed = JSON.parse(savedData);
        const answers = Object.values(parsed).filter(value => {
          if (Array.isArray(value)) return value.length > 0;
          return value !== null && value !== '';
        });

        section.saved.set(answers.length);
      } catch (e) {
        console.error(`Error parsing localStorage for ${storageKey}:`, e);
      }
    });
  }
}
