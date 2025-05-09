import { Injectable, signal } from '@angular/core';
import { MenuItem, MenuIcons, MenuRoutes, SidebarItem, ProgressSection } from '../models/menu.models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _menuItems: MenuItem[] = [
    { id: 'button', label: 'Buttons', route: MenuRoutes.Button, icon: MenuIcons.Button },
    { id: 'input', label: 'Inputs', route: MenuRoutes.Input, icon: MenuIcons.Input },
    { id: 'custom-input', label: 'Custom Inputs', route: MenuRoutes.CustomInput, icon: MenuIcons.CustomInput },
    { id: 'color', label: 'Colors', route: MenuRoutes.Color, icon: MenuIcons.Color },
    { id: 'typography', label: 'Typography', route: MenuRoutes.Typography, icon: MenuIcons.Typography },
    { id: 'table', label: 'Tables', route: MenuRoutes.Table, icon: MenuIcons.Table },
  ];

   htmlSaved = signal(0);
   cssSaved = signal(0);
   jsSaved = signal(0);

   private submittedQuestions: Record<'html' | 'css' | 'js', Set<string>> = {
    html: new Set(),
    css: new Set(),
    js: new Set(),
  };

  _questionnaireItems: SidebarItem[] = [
    {
      label: 'HTML',
      route: '/html',
      icon: 'bi bi-code-slash',
      sectionsSignal: signal<ProgressSection[]>([
        { key: 'html', label: 'HTML', saved: this.htmlSaved, total: 5 }
      ])
    },
    {
      label: 'CSS',
      route: '/css',
      icon: 'bi bi-palette',
      sectionsSignal: signal<ProgressSection[]>([
        { key: 'css', label: 'CSS', saved: this.cssSaved, total: 5 }
      ])
    },
    {
      label: 'JavaScript',
      route: '/js',
      icon: 'bi bi-cpu',
      sectionsSignal: signal<ProgressSection[]>([
        { key: 'js', label: 'JavaScript', saved: this.jsSaved, total: 5 }
      ])
    }
  ];

  constructor() { }

  getMenuItems(): MenuItem[] {
    return [...this._menuItems];
  }

  getQuestionnaire(): SidebarItem[] {
    return [...this._questionnaireItems];
  }

  getMenuItemById(id: string): MenuItem | undefined {
    return this._menuItems.find(item => item.id === id);
  }

  increaseSaved(section: 'html' | 'css' | 'js', questionKey: string) {
    const submittedSet = this.submittedQuestions[section];
    if (!submittedSet.has(questionKey)) {
      submittedSet.add(questionKey);
    if (section === 'html') this.htmlSaved.update(v => v + 1);
    if (section === 'css') this.cssSaved.update(v => v + 1);
    if (section === 'js') this.jsSaved.update(v => v + 1);
  }
  }
} 