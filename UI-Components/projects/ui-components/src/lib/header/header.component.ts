import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, BsDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() theme: 'light' | 'dark' = 'light';
  @Output() themeChange = new EventEmitter<'light' | 'dark'>();

  ngOnInit() {
    // Initialize theme
    this.applyTheme(this.theme);
  }

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.theme = newTheme;
    this.themeChange.emit(newTheme);
    this.applyTheme(newTheme);
  }
  
  changeTheme(theme: 'light' | 'dark') {
    this.theme = theme;
    this.themeChange.emit(theme);
    this.applyTheme(theme);
  }
  
  private applyTheme(theme: 'light' | 'dark') {
    const body = document.body;
    body.classList.remove('theme-light', 'theme-dark');
    const themeClass = `theme-${theme}`;
    body.classList.add(themeClass);
  }
}
