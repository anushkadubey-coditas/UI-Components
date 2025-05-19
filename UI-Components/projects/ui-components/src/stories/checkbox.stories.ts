import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiCheckboxComponent } from '../lib/components/input/ui-checkbox/ui-checkbox.component';

const meta: Meta<UiCheckboxComponent> = {
  title: 'Library/Checkbox',
  component: UiCheckboxComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiCheckboxComponent] })],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    checkedChange: { action: 'checkedChange' },
  },
};

export default meta;
type Story = StoryObj<UiCheckboxComponent>;

export const Unchecked: Story = { args: { label: 'Checkbox Label', checked: false, disabled: false } };
export const Checked: Story = { args: { label: 'Checkbox Label', checked: true, disabled: false } };
export const Disabled: Story = { args: { label: 'Checkbox Label', checked: false, disabled: true } }; 