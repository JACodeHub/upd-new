import { Component, OnInit } from '@angular/core';
import { ProjectsDetailsFacade } from './+state/projects-details.facade';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  title$ = this.projectsDetailsService.title$;
  status$ = this.projectsDetailsService.status$;

  navTabs: { href: string; title: string }[] = [
    { href: 'summary', title: 'Summary' },
    { href: 'webtraffic', title: 'Web Traffic' },
    { href: 'search_analytics', title: 'Search Analytics' },
    { href: 'feedback', title: 'Page Feedback' },
    { href: 'calldrivers', title: 'Call Drivers' },
    { href: 'uxtests', title: 'UX Tests' },
    { href: 'details', title: 'Details' },
  ];

  data$ = this.projectsDetailsService.projectsDetailsData$;

  constructor(private readonly projectsDetailsService: ProjectsDetailsFacade) {}

  ngOnInit(): void {}
}
