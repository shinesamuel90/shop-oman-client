import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/shared/services/template.service';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {

  isCollapse: boolean;

  constructor(private tplSvc: TemplateService, private router: Router) {
      router.events.subscribe((event: Event) => {
          if (event instanceof NavigationEnd) {
              if (window.innerWidth < 992) {
                  this.tplSvc.toggleSideNavCollapse(false);
              }
          }
      });
  }

  ngOnInit() {
      this.tplSvc.isSideNavCollapseChanges.subscribe(isCollapse => this.isCollapse = isCollapse);
  }

  toggleSideNavCollapse() {
      this.isCollapse = !this.isCollapse;
      this.tplSvc.toggleSideNavCollapse(this.isCollapse);
  }

}
