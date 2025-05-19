import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiButtonComponent } from '../lib/components/button/ui-button/ui-button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<UiButtonComponent & { text: string }> = {
  title: 'Library/Button',
  component: UiButtonComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiButtonComponent] })],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'destructive'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    icon: { control: 'text' },
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<UiButtonComponent & { text: string }>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: { variant: 'primary', size: 'md', disabled: false, icon: '', text: 'Primary Button' },
  render: (args) => ({ props: args, template: `<lib-ui-button [variant]="variant" [size]="size" [disabled]="disabled" [icon]="icon">{{ text }}</lib-ui-button>` }),
};

export const Secondary: Story = { args: { variant: 'secondary', size: 'md', disabled: false, icon: '', text: 'Secondary Button' }, render: Primary.render };
export const Outline: Story = { args: { variant: 'outline', size: 'md', disabled: false, icon: '', text: 'Outline Button' }, render: Primary.render };
export const Ghost: Story = { args: { variant: 'ghost', size: 'md', disabled: false, icon: '', text: 'Ghost Button' }, render: Primary.render };
export const Link: Story = { args: { variant: 'link', size: 'md', disabled: false, icon: '', text: 'Link Button' }, render: Primary.render };
export const Destructive: Story = { args: { variant: 'destructive', size: 'md', disabled: false, icon: '', text: 'Destructive Button' }, render: Primary.render };
export const Disabled: Story = { args: { variant: 'primary', size: 'md', disabled: true, icon: '', text: 'Disabled Button' }, render: Primary.render };
