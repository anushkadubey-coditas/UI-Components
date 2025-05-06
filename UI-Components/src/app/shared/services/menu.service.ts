import { Injectable } from '@angular/core';
import { MenuItem, MenuIcons, MenuRoutes } from '../models/menu.models';

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

  constructor() { }

  getMenuItems(): MenuItem[] {
    return [...this._menuItems];
  }

  getMenuItemById(id: string): MenuItem | undefined {
    return this._menuItems.find(item => item.id === id);
  }
} 