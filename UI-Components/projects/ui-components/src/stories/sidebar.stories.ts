import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarComponent, SidebarItem } from '../lib/sidebar/sidebar.component';

const meta: Meta<SidebarComponent> = {
  title: 'Library/Sidebar',
  component: SidebarComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [SidebarComponent, RouterTestingModule.withRoutes([])] })],
  argTypes: {
    items: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<SidebarComponent>;

export const Default: Story = {
  args: {
    items: [
      { id: '1', label: 'Colors', route: '/colors' },
      { id: '2', label: 'Input', route: '/input' },
      { id: '3', label: 'Table', route: '/table' }
    ] as SidebarItem[],
  },
};

export const Empty: Story = { args: { items: [] } }; 