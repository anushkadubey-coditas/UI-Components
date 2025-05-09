import { computed, inject, Injectable, signal } from '@angular/core';
import { SidebarItem } from '../../../../../../src/app/shared/models';
import { MenuService } from '../../../../../../src/app/shared/services/menu.service';

@Injectable({
  providedIn: 'root'
})
export class ProgressTrackerService {
  private menuService = inject(MenuService);
}
