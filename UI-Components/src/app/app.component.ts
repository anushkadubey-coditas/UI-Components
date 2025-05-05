import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SidebarComponent } from '../../projects/ui-components/src/public-api';
import { HeaderComponent } from '../../projects/ui-components/src/lib/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TooltipModule, SidebarComponent, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  menuItems = [
    { label: 'Buttons', route: '/preview/button', icon: 'bi bi-hand-index' },
    { label: 'Inputs', route: '/preview/input', icon: 'bi bi-input-cursor' },
    { label: 'Custom Inputs', route: '/preview/custom-input', icon: 'bi bi-custom-input' },
  ];

  currentTheme: 'light' | 'dark' = 'light';

  ngOnInit() {
    // Initialize with saved preference or default to light
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      this.currentTheme = savedTheme;
    }
    this.applyTheme(this.currentTheme);
  }

  applyTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
  }
}
