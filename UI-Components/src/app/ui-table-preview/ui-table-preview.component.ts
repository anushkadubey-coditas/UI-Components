import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiTableComponent } from '../../../projects/ui-components/src/lib/components/ui-table/ui-table.component';

@Component({
  selector: 'ui-table-preview',
  standalone: true,
  imports: [CommonModule, FormsModule, UiTableComponent],
  templateUrl: './ui-table-preview.component.html',
  styleUrls: ['./ui-table-preview.component.scss']
})
export class UiTablePreviewComponent {
  enablePagination = true;
  enableSorting = true;

  columns = ['id', 'name', 'email'];
  users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    { id: 4, name: 'David', email: 'david@example.com' },
    { id: 5, name: 'Eve', email: 'eve@example.com' },
    { id: 6, name: 'Frank', email: 'frank@example.com' },
    { id: 7, name: 'Grace', email: 'grace@example.com' },
  ];
}
