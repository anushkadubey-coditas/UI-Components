import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiTypographyComponent } from '../lib/components/ui-typography/ui-typography.component';

const meta: Meta<UiTypographyComponent> = {
  title: 'Library/Typography',
  component: UiTypographyComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiTypographyComponent] })],
  argTypes: {
    tag: { control: 'select', options: ['h1','h2','h3','h4','h5','h6','p','blockquote'] },
    text: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<UiTypographyComponent>;

export const Paragraph: Story = { args: { tag: 'p', text: 'Sample paragraph text.', className: '' } };
export const Heading1: Story = { args: { tag: 'h1', text: 'Heading Level 1', className: '' } };
export const Blockquote: Story = { args: { tag: 'blockquote', text: 'Blockquote example.', className: '' } };
export const Heading2: Story = { args: { tag: 'h2', text: 'Heading Level 2', className: '' } };
export const Heading3: Story = { args: { tag: 'h3', text: 'Heading Level 3', className: '' } };
export const Heading4: Story = { args: { tag: 'h4', text: 'Heading Level 4', className: '' } };
export const Heading5: Story = { args: { tag: 'h5', text: 'Heading Level 5', className: '' } };
export const Heading6: Story = { args: { tag: 'h6', text: 'Heading Level 6', className: '' } }; 