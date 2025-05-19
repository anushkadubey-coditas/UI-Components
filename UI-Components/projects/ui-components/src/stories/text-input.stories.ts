import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiTextInputComponent } from '../lib/components/input/ui-text-input/ui-text-input.component';

const meta: Meta<UiTextInputComponent> = {
  title: 'Library/Text Input',
  component: UiTextInputComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiTextInputComponent] })],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'password'] },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    inputId: { control: 'text' },
    value: { control: 'text' },
    valueChange: { action: 'valueChange' },
  },
};

export default meta;
type Story = StoryObj<UiTextInputComponent>;

export const Default: Story = { args: { label: 'Name', placeholder: 'Enter name', type: 'text', disabled: false, required: false, inputId: 'text-input', value: '' } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
export const Password: Story = { args: { ...Default.args, type: 'password', placeholder: 'Enter password', inputId: 'password-input', value: '' } }; 