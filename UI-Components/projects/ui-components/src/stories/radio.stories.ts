import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiRadioComponent } from '../lib/components/input/ui-radio/ui-radio.component';

const meta: Meta<UiRadioComponent> = {
  title: 'Library/Radio',
  component: UiRadioComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiRadioComponent] })],
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    change: { action: 'change' },
  },
};

export default meta;
type Story = StoryObj<UiRadioComponent>;

export const Unchecked: Story = { args: { label: 'Option A', name: 'group', value: 'A', checked: false } };
export const Checked: Story = { args: { label: 'Option A', name: 'group', value: 'A', checked: true } }; 