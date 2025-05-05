import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiColorBoxComponent } from '../../../projects/ui-components/src/lib/components/ui-color-box/ui-color-box.component';

@Component({
  selector: 'ui-color-preview',
  standalone: true,
  imports: [CommonModule, UiColorBoxComponent],
  templateUrl: './ui-color-preview.component.html',
  styleUrls: ['./ui-color-preview.component.scss']
})
export class UiColorPreviewComponent {
  colorList = [
    { name: 'Primary', var: '--primary' },
    { name: 'Secondary', var: '--secondary' },
    { name: 'Success', var: '--success' },
    { name: 'Danger', var: '--danger' },
    { name: 'Warning', var: '--warning' },
    { name: 'Info', var: '--info' },
    { name: 'Light', var: '--light' },
    { name: 'Dark', var: '--dark' }
  ];
}
