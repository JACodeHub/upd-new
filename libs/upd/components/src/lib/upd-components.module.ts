import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  NgbDropdownModule,
  NgbPopoverModule,
  NgbAlertModule,
  NgbAccordionModule,
  NgbModalModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@amonsour/ngx-charts';
import { CardComponent } from './card/card.component';
import { DataCardComponent } from './data-card/data-card.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { DateSelectorDropdownComponent } from './date-selector/date-selector-dropdown.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {
  ComboGroupedVerticalBarLineChartComponent,
  ComboSeriesVerticalComponent,
  ChartsComponent,
} from './charts';
import { AlertComponent } from './alert/alert.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ModalComponent } from './modal/modal.component';
import { DataTableStylesComponent } from './data-table-styles/data-table-styles.component';
import { ProjectStatusLabelComponent } from './project-status-label/project-status-label.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbAccordionModule,
    NgbAlertModule,
    NgbDropdownModule,
    NgbPopoverModule,
    NgbModalModule,
    NgbTooltipModule,
    NgxChartsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
  ],
  declarations: [
    CardComponent,
    DataTableComponent,
    DateSelectorComponent,
    DateSelectorDropdownComponent,
    ComboGroupedVerticalBarLineChartComponent,
    ComboSeriesVerticalComponent,
    NavTabsComponent,
    DataCardComponent,
    AlertComponent,
    AccordionComponent,
    ChartsComponent,
    ModalComponent,
    DataTableStylesComponent,
    ProjectStatusLabelComponent,
  ],
  exports: [
    NgbPopoverModule,
    NgxChartsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CardComponent,
    DataTableComponent,
    DateSelectorComponent,
    DateSelectorDropdownComponent,
    ComboGroupedVerticalBarLineChartComponent,
    ComboSeriesVerticalComponent,
    NavTabsComponent,
    DataCardComponent,
    AlertComponent,
    AccordionComponent,
    ChartsComponent,
    ModalComponent,
    DataTableStylesComponent,
    ProjectStatusLabelComponent,
  ],
})
export class UpdComponentsModule {}
