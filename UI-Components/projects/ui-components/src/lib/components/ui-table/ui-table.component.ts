import { Component, Input, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-table',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, FormsModule, PaginationModule],
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss']
})
export class UiTableComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() itemsPerPage = 5;
  @Input() enablePagination = false;
  @Input() enableSorting = false;

  private _currentPage = signal(1);
  @Input() set currentPage(value: number) {
    this._currentPage.set(value);
  }
  get currentPage(): number {
    return this._currentPage();
  }
  @Output() currentPageChange = new EventEmitter<number>();

  private _sortColumn = signal<string>('');
  private _sortDirection = signal<'asc' | 'desc'>('asc');
  
  get sortColumn(): string {
    return this._sortColumn();
  }
  
  get sortDirection(): 'asc' | 'desc' {
    return this._sortDirection();
  }

  get paginatedData(): any[] {
    const sorted = this.sortedData();
    if (!this.enablePagination) return sorted;

    const start = (this.currentPage - 1) * this.itemsPerPage;
    return sorted.slice(start, start + this.itemsPerPage);
  }

  sortedData(): any[] {
    if (!this.enableSorting || !this._sortColumn()) return [...this.data];

    return [...this.data].sort((a, b) => {
      const valA = a[this._sortColumn()];
      const valB = b[this._sortColumn()];
      const compare = valA < valB ? -1 : valA > valB ? 1 : 0;
      return this._sortDirection() === 'asc' ? compare : -compare;
    });
  }

  sortBy(column: string) {
    if (this._sortColumn() === column) {
      this._sortDirection.set(this._sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this._sortColumn.set(column);
      this._sortDirection.set('asc');
    }
  }

  pageChanged(event: any) {
    this._currentPage.set(event.page);
    this.currentPageChange.emit(event.page);
  }
}
