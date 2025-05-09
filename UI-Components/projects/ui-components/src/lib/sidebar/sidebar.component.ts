import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { RouterModule   } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { UiProgressTrackerComponent } from '../components/ui-progress-tracker/ui-progress-tracker.component';
import { SidebarItem } from '../../../../../src/app/shared/models';
import { UiFooterComponent } from '../components/ui-footer/ui-footer.component';
@Component({
  selector: 'lib-sidebar',
  imports: [RouterModule, CommonModule, CollapseModule, UiProgressTrackerComponent, UiFooterComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() items: SidebarItem[] = [];

  sectionsSignal = computed(() => this.items.map(item => item.sectionsSignal));
  footerText = '© 2025 Questionnaire';


  onInit() {
    console.log(this.items);
  }
  // sectionsSignal = signal<ProgressSection[]>([
  //   { key: 'html', label: 'HTML', saved: 1, total: 5 },
  //   { key: 'css', label: 'CSS', saved: 2, total: 5 },
  //   { key: 'js', label: 'JavaScript', saved: 0, total: 5 }
  // ]);
}

