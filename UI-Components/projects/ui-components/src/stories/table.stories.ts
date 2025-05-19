import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiTableComponent } from '../lib/components/ui-table/ui-table.component';

const sampleData = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 22 },
  { name: 'Dave', age: 40 },
];
const columns = ['name', 'age'];

const meta: Meta<UiTableComponent> = {
  title: 'Library/Table',
  component: UiTableComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiTableComponent] })],
  argTypes: {
    data: { control: 'object' },
    columns: { control: { type: 'object' } },
    itemsPerPage: { control: 'number' },
    enablePagination: { control: 'boolean' },
    enableSorting: { control: 'boolean' },
    currentPageChange: { action: 'currentPageChange' },
  },
};

export default meta;
type Story = StoryObj<UiTableComponent>;

export const Default: Story = { args: { data: sampleData, columns, enablePagination: false, enableSorting: false } };
export const Paginated: Story = { args: { data: sampleData, columns, enablePagination: true, itemsPerPage: 2 } };
export const Sortable: Story = { args: { data: sampleData, columns, enableSorting: true } }; 