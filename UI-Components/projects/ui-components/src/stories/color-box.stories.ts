import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiColorBoxComponent } from '../lib/components/ui-color-box/ui-color-box.component';

const meta: Meta<UiColorBoxComponent> = {
  title: 'Library/Color Box',
  component: UiColorBoxComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiColorBoxComponent] })],
  argTypes: {
    colorName: { control: 'text' },
    variable: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<UiColorBoxComponent>;

export const Default: Story = { args: { colorName: 'Primary', variable: '--primary-color' } };
export const Secondary: Story = { args: { colorName: 'Secondary', variable: '--secondary-color' } }; 