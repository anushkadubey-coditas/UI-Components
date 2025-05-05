import { Component } from '@angular/core';
import { UiTypographyComponent } from '../../../projects/ui-components/src/lib/components/ui-typography/ui-typography.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-typography-preview',
  standalone: true,
  imports: [UiTypographyComponent, CommonModule],
  templateUrl: './ui-typography-preview.component.html',
  styleUrls: ['./ui-typography-preview.component.scss']
})
export class UiTypographyPreviewComponent {}
