import { Component } from '@angular/core';
import { UiSidebarPreviewComponent } from './ui-sidebar-preview/ui-sidebar-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UiSidebarPreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Component functionality has been moved to UiSidebarPreviewComponent
}
