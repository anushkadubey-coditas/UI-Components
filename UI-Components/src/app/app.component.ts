import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SidebarComponent } from '../../projects/ui-components/src/public-api';
import { HeaderComponent } from '../../projects/ui-components/src/lib/header/header.component';
import { CommonModule } from '@angular/common';
import { MenuItem, Theme } from './shared/models/menu.models';
import { MenuService } from './shared/services/menu.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TooltipModule, SidebarComponent, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  menuItems: MenuItem[] = [];
  currentTheme: Theme = Theme.Light;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    // Get menu items from service
    this.menuItems = this.menuService.getMenuItems();
    
    // Initialize with saved preference or default to light
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === Theme.Light || savedTheme === Theme.Dark)) {
      this.currentTheme = savedTheme;
    }
    this.applyTheme(this.currentTheme);
  }

  applyTheme(theme: Theme) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
  }
}
