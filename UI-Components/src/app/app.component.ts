import { Component } from '@angular/core';
import { UiSidebarPreviewComponent } from './ui-sidebar-preview/ui-sidebar-preview.component';
import { CommonModule } from '@angular/common';
import { QuestionnaireSidebarComponent } from './questionnaire-sidebar/questionnaire-sidebar.component';
import { Router, RouterModule } from '@angular/router';
import { MenuItem, Theme } from './shared/models/menu.models';
import { MenuService } from './shared/services/menu.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, UiSidebarPreviewComponent, QuestionnaireSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router, private menuService: MenuService) {}
  selected: 'designSystem' | 'questionnaire' | null = null;
  menuItems: MenuItem[] = [];
  currentTheme: Theme = Theme.Light;

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === Theme.Light || savedTheme === Theme.Dark)) {
      this.currentTheme = savedTheme;
    } else {
      this.currentTheme = Theme.Light;
    }
    this.applyTheme(this.currentTheme);
  }

  applyTheme(theme: Theme) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  loadComponent(type: 'designSystem' | 'questionnaire') {
    this.selected = type;
  }
}
