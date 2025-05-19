import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiInputValidatedComponent } from '../lib/components/custom-input/ui-text-input-with-validation/ui-text-input-with-validation.component';

const meta: Meta<UiInputValidatedComponent> = {
  title: 'Library/Validated Input',
  component: UiInputValidatedComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiInputValidatedComponent] })],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    model: { control: 'text' },
    modelChange: { action: 'modelChange' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<UiInputValidatedComponent>;

export const Default: Story = { args: { label: 'Name', placeholder: 'Enter name', required: false, model: '' } };
export const Required: Story = { args: { ...Default.args, required: true } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } }; 