import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { TemplateModule } from './template/template.module';
import { TemplateService } from './shared/services/template.service';

//Layout Component
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthenticationLayoutComponent } from './common/authentication-layout.component';

// Routing Module
//import { AppRoutes, AppRoutingModule } from './app.routing';

// App Component
import { AppComponent } from './app.component';
import { AppCustomLayoutComponent } from './layout/app-custom-layout/app-custom-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { HomeHeaderComponent } from './layout/home-header/home-header.component';
import { HomeFooterComponent } from './layout/home-footer/home-footer.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './layout/admin-footer/admin-footer.component';
import { AdminNavComponent } from './layout/admin-nav/admin-nav.component';
import { HomeNavComponent } from './layout/home-nav/home-nav.component';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        TemplateModule
    ],
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        AuthenticationLayoutComponent,
        AppCustomLayoutComponent,
        HeaderComponent,
        FooterComponent,
        HomeLayoutComponent,
        HomeHeaderComponent,
        HomeFooterComponent,
        AdminLayoutComponent,
        AdminHeaderComponent,
        AdminFooterComponent,
        AdminNavComponent,
        HomeNavComponent
    ],
    providers: [TemplateService],
    bootstrap: [AppComponent]
})


export class AppModule { }
