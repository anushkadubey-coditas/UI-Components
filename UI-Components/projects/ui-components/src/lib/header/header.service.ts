import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  private _title = signal<string>('Design System');

  readonly title = this._title.asReadonly();

  setTitle(newTitle: string) {
    this._title.set(newTitle);
  }
}
