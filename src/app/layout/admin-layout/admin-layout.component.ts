import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/shared/services/template.service';
export type HeaderType = 'header-default' | 'header-primary' | 'header-info' | 'header-success' | 'header-danger' | 'header-dark';
export type SideNavType = 'sidenav-default' | 'side-nav-dark';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  headerThemes = ['header-default', 'header-primary', 'header-info', 'header-success', 'header-danger', 'header-dark'];
  sidenavThemes = ['sidenav-default', 'side-nav-dark'];
  headerSelected: HeaderType;
  sidenavSelected : SideNavType;
  isCollapse : boolean;
  rtlActived: boolean = false;
  
  themeConfigOpen: boolean = false;
  constructor(private tplSvc: TemplateService) { }

  ngOnInit(): void {
    this.tplSvc.isSideNavCollapseChanges.subscribe(isCollapse => this.isCollapse = isCollapse);
  }
  changeHeader(headerTheme:HeaderType) {
    this.headerSelected = headerTheme;
}

changeSidenav(sidenavTheme:SideNavType) {
    this.sidenavSelected = sidenavTheme;
}

toggleThemeConfig() {
    this.themeConfigOpen = !this.themeConfigOpen;
}
}
