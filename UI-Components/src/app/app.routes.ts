import { Routes } from '@angular/router';
import { UiButtonPreviewComponent } from './ui-button-preview/ui-button-preview.component';
import { UiInputPreviewComponent } from './ui-input-preview/ui-input-preview.component';
import { UiCustomInputPreviewComponent } from './ui-custom-input-preview/ui-custom-input-preview.component';
import { UiColorPreviewComponent } from './ui-color-preview/ui-color-preview.component';
import { UiTypographyPreviewComponent } from './ui-typography-preview/ui-typography-preview.component';
import { UiTablePreviewComponent } from './ui-table-preview/ui-table-preview.component';
import { UiSidebarPreviewComponent } from './ui-sidebar-preview/ui-sidebar-preview.component';
import { QuestionnaireSidebarComponent } from './questionnaire-sidebar/questionnaire-sidebar.component';
import { CssFormComponent } from './questionnaire/css-form/css-form.component';
import { JsFormComponent } from './questionnaire/js-form/js-form.component';
import { HtmlFormComponent } from './questionnaire/html-form/html-form.component';


export const routes: Routes = [
    { path: 'preview/button', component: UiButtonPreviewComponent },
    { path: 'preview/input', component: UiInputPreviewComponent },
    { path: 'preview/custom-input', component: UiCustomInputPreviewComponent },
    { path: 'preview/color', component: UiColorPreviewComponent },
    { path: 'preview/typography', component: UiTypographyPreviewComponent },
    { path: 'preview/table', component: UiTablePreviewComponent },
    { path: 'design-system', component: UiSidebarPreviewComponent },
    { path: 'questionnaire', component: QuestionnaireSidebarComponent },
    { path: 'html', component: HtmlFormComponent },
    { path: 'css', component: CssFormComponent },
    { path: 'js', component: JsFormComponent }


  ];
  