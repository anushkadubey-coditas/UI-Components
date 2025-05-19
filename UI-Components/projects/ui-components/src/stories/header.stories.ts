import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HeaderComponent, Theme } from '../lib/header/header.component';

const meta: Meta<HeaderComponent> = {
  title: 'Library/Header',
  component: HeaderComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [HeaderComponent] })],
  argTypes: {
    theme: { control: 'radio', options: Object.values(Theme) },
    themeChange: { action: 'themeChange' },
  },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Light: Story = { args: { theme: Theme.Light } };
export const Dark: Story = { args: { theme: Theme.Dark } };
export const WithActions: Story = {
  args: { theme: Theme.Light },
  render: (args) => ({
    props: args,
    template: `
      <lib-header [theme]="theme">
        <button class="btn btn-primary me-2">Action 1</button>
        <button class="btn btn-secondary">Action 2</button>
      </lib-header>
    `,
  }),
};
