import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Define theme type locally
export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, BsDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() theme: Theme = Theme.Light;
  @Output() themeChange = new EventEmitter<Theme>();

  ngOnInit() {
    // Initialize theme
    this.applyTheme(this.theme);
  }

  toggleTheme() {
    const newTheme = this.theme === Theme.Light ? Theme.Dark : Theme.Light;
    this.theme = newTheme;
    this.themeChange.emit(newTheme);
    this.applyTheme(newTheme);
  }
  
  changeTheme(theme: Theme) {
    this.theme = theme;
    this.themeChange.emit(theme);
    this.applyTheme(theme);
  }
  
  private applyTheme(theme: Theme) {
    const body = document.body;
    body.classList.remove('theme-light', 'theme-dark');
    const themeClass = `theme-${theme}`;
    body.classList.add(themeClass);
  }
}
