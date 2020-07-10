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
import { AppRoutes } from './app.routing';

// App Component
import { AppComponent } from './app.component';
import { AppCustomLayoutComponent } from './layout/app-custom-layout/app-custom-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes, { useHash: true }),
        SharedModule,
        TemplateModule
    ],
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        AuthenticationLayoutComponent,
        AppCustomLayoutComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [TemplateService],
    bootstrap: [AppComponent]
})


export class AppModule { }
