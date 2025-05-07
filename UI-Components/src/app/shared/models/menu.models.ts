/**
 * Enum for menu item routes
 */
export enum MenuRoutes {
  Button = '/preview/button',
  Input = '/preview/input',
  CustomInput = '/preview/custom-input',
  Color = '/preview/color',
  Typography = '/preview/typography',
  Table = '/preview/table',
  html = '/html',
  css = '/css',
  js = '/js'
}

/**
 * Enum for menu icons
 */
export enum MenuIcons {
  Button = 'bi bi-hand-index',
  Input = 'bi bi-input-cursor',
  CustomInput = 'bi bi-custom-input',
  Color = 'bi bi-palette',
  Typography = 'bi bi-type',
  Table = 'bi bi-table',
  HTML = 'bi bi-code-slash',
  CSS = 'bi bi-braces',
  JS = 'bi bi-filetype-js'
}

/**
 * Enum for theme options
 */
export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

/**
 * Menu item interface
 */
export interface MenuItem {
  id: string;
  label: string;
  route: MenuRoutes;
  icon?: MenuIcons;
} 