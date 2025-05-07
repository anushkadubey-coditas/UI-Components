import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { RouterModule   } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { UiProgressTrackerComponent } from '../components/ui-progress-tracker/ui-progress-tracker.component';

export interface SidebarItem {
  id?: string;
  label: string;
  route: string;
  icon?: string;
}

@Component({
  selector: 'lib-sidebar',
  imports: [RouterModule, CommonModule, CollapseModule, UiProgressTrackerComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() items: SidebarItem[] = [];
  sections = signal([
    {  saved: 0, total: 5 },
  ]);
}

