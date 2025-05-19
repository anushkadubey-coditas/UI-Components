import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiToggleButtonComponent } from '../lib/components/custom-input/ui-toggle-button/ui-toggle-button.component';

const meta: Meta<UiToggleButtonComponent> = {
  title: 'Library/Toggle Button',
  component: UiToggleButtonComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiToggleButtonComponent] })],
  argTypes: {
    checked: { control: 'boolean' },
    checkedChange: { action: 'checkedChange' },
  },
};

export default meta;
type Story = StoryObj<UiToggleButtonComponent>;

export const Unchecked: Story = { args: { checked: false } };
export const Checked: Story = { args: { checked: true } }; 