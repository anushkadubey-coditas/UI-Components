import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiAutocompleteInputComponent } from '../lib/components/custom-input/ui-autocomplete-input/ui-autocomplete-input.component';

const meta: Meta<UiAutocompleteInputComponent> = {
  title: 'Library/Autocomplete Input',
  component: UiAutocompleteInputComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiAutocompleteInputComponent] })],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    suggestions: { control: 'object' },
    options: { control: 'object' },
    model: { control: 'text' },
    modelChange: { action: 'modelChange' },
  },
};

export default meta;
type Story = StoryObj<UiAutocompleteInputComponent>;

const sampleSuggestions = ['Apple', 'Banana', 'Cherry'];

export const Default: Story = { args: { label: 'Fruit', placeholder: 'Choose a fruit', suggestions: sampleSuggestions, options: [], model: '' } };
export const Preselected: Story = { args: { ...Default.args, model: 'Banana' } }; 