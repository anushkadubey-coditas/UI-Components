import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiSelectComponent } from '../lib/components/input/ui-select/ui-select.component';

const meta: Meta<UiSelectComponent> = {
  title: 'Library/Select',
  component: UiSelectComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiSelectComponent] })],
  argTypes: {
    label: { control: 'text' },
    options: { control: 'object' },
    value: { control: 'text' },
    valueChange: { action: 'valueChange' },
  },
};

export default meta;
type Story = StoryObj<UiSelectComponent>;

const sampleOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

export const Default: Story = { args: { label: 'Select Option', options: sampleOptions, value: '1' } }; 