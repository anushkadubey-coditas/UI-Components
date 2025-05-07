import { Component } from '@angular/core';
import { MenuItem, Theme } from '../shared/models';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, SidebarComponent } from '../../../projects/ui-components/src/public-api';
import { CommonModule } from '@angular/common';
import { MenuService } from '../shared/services/menu.service';
import { HeaderService } from '../../../projects/ui-components/src/lib/header/header.service';

@Component({
  selector: 'app-questionnaire-sidebar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent, CommonModule],
  templateUrl: './questionnaire-sidebar.component.html',
  styleUrl: './questionnaire-sidebar.component.scss'
})
export class QuestionnaireSidebarComponent {

  menuItems: MenuItem[] = [];
  currentTheme: Theme = Theme.Light;

  constructor(private menuService: MenuService,
              private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.setTitle('Questionnaire');
    this.menuItems = this.menuService.getQuestionnaire();
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === Theme.Light || savedTheme === Theme.Dark)) {
      this.currentTheme = savedTheme;
    }
    //this.applyTheme(this.currentTheme);
  }

  applyTheme(theme: Theme) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
  }

}
