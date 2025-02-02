import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PagesHomeComponent } from './pages-home/pages-home.component';
import { PagesDetailsComponent } from './pages-details/pages-details.component';
import { PagesDetailsSummaryComponent } from './pages-details/pages-details-summary/pages-details-summary.component';
import { PagesDetailsWebtrafficComponent } from './pages-details/pages-details-webtraffic/pages-details-webtraffic.component';
import { PagesDetailsSearchAnalyticsComponent } from './pages-details/pages-details-search-analytics/pages-details-search-analytics.component';
import { PagesDetailsFeedbackComponent } from './pages-details/pages-details-feedback/pages-details-feedback.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: PagesHomeComponent, pathMatch: 'full' },
      {
        path: ':id',
        component: PagesDetailsComponent,
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          { path: 'summary', component: PagesDetailsSummaryComponent },
          { path: 'webtraffic', component: PagesDetailsWebtrafficComponent },
          {
            path: 'search_analytics',
            component: PagesDetailsSearchAnalyticsComponent,
          },
          { path: 'feedback', component: PagesDetailsFeedbackComponent },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
