import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/shared/services/template.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  searchModel: string;
    isCollapse: boolean;
    isOpen: boolean;
    searchActived = false;

    constructor(private tplSvc: TemplateService) {
    }

    ngOnInit(): void {
        this.tplSvc.isSideNavCollapseChanges.subscribe(isCollapse => this.isCollapse = isCollapse);
        this.tplSvc.isSidePanelOpenChanges.subscribe(isOpen => this.isOpen = isOpen);
    }

    toggleSideNavCollapse() {
        this.isCollapse = !this.isCollapse;
        this.tplSvc.toggleSideNavCollapse(this.isCollapse);
    }

    toggleSidePanelOpen() {
        this.isOpen = !this.isOpen;
        this.tplSvc.toggleSidePanelOpen(this.isOpen);
    }

    toggleSearch() {
        this.searchActived = !this.searchActived;
        console.log(this.searchActived);
    }

}
