# OnlineShopOman

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## remove vs code security error

powershell –ExecutionPolicy Bypass
## Add angular material 
ng add @angular/material
## folder structure
## core module- 
This module is for classes used by app.module. Resources which are always loaded such as route guards, HTTP interceptors, and application level services, such as the ThemeService and logging belong in this directory.
   * state
   * Models
   * services
   * Utilities
 ##  Data Module
~/src/app/data

The data module is a top level directory and holds the schema (models/entities) and services (repositories) for data consumed by the application.
By default there are two subdirectories:

~/src/app/data
  /schema
  /service
The schema directory holds the class definition files for data structures. An example data structure:

export class Project {
  link: string;
  title: string;
  thumbnail: string;
}
The service directory holds the services for fetching data. The service files are not necessarily a 1:1 match with schema files. An example service file:

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '../schema/project';
import { ApiService } from './api.service';

const routes = {
    projects: '/projects',
    project: (id: number) =>  `/projects/${id}`
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    constructor(
      private apiService: ApiService) {}

    getAll(): Observable<Array<Project>> {
        return this.apiService.get(routes.projects);
    }

    getSingle(id: number): Observable<Project> {
        return this.apiService.get(routes.project(id));
    }
}
   ## Multiple Data Sources
If your application consumes data from more than one source then the data directory should be restructured to contain subdirectories for each data source. Do not create multiple modules for each data source:

~/src/app/data
  /data-source-one
    /schema
    /service
  /data-source-two
    /schema
    /service
  /data.module.ts
Schema Naming Standard
A schema file is very much like an entity file in an Object Relational Mapper. This schema file is central to your application’s consumption of data and therefore does not need cursory decorators such as calling it ProjectSchema or ProjectModel. Schemas are special because they are the only plain-named class in the application.
## Shared Module
~/src/app/shared

The shared module contains classes and resources which are used in more than one dynamically loaded module. By always loading with the application the shared components are ready whenever a module requests them.

The shared module is a good place to import and export the FormsModule and the ReactiveFormsModule. It is also good for the FontAwesomeModule and any other resource used by some modules some of the time but not all modules all of the time.
## Blocks module- common things like tool bar, loaders , nubers pipe 
   * Directives
   * Components
   * Pipes
   * Filters
## Fetures Module
   * Directives
   * Components
   * Pipes 
   * Filters
   * Local Services  
   ## Styles Directory
~/src/styles

The ~/src/styles directory is used to store scss style sheets for the application. It can contain themes, Bootstrap, Angular Material, and any other styles.

~/src/styles.scss is installed in the default Angular skeleton. It should contain @import statments for all your global application scss files. For instance it can import theme files stored in the ~/src/styles directory.

Themes
The ~/src/styles/themes directory should contain the application-wide themes. This application includes two theme-files, black-theme.scss and light-theme.scss.

A theme file generates the color-palette that composes the final theme and is constructed of three main palettes: primary, accent and warn. These palettes are defined using the mat-palette mixin, which accepts a mat-color and a hue-number that represents different shades of the chosen color. In terms of code, this is what we have:

$my-black-primary: mat-palette($mat-grey, 700, 300, 900);
$my-black-accent: mat-palette($mat-blue-grey, 400);
$my-black-warn: mat-palette($mat-red, 500);

$my-black-theme: mat-dark-theme(
  $my-black-primary,
  $my-black-accent,
  $my-black-warn
);
The themes are included in the styles.scss file along with the mat-core mixin, which adds the base styles to material components.

@import '~@angular/material/theming';

@import './styles/themes/black-theme.scss';
@import './styles/themes/light-theme.scss';

@include mat-core();

.my-light-theme {
  @include angular-material-theme($my-light-theme);
}

.my-dark-theme {
  @include angular-material-theme($my-dark-theme);
}
The downside here is that the approach above only will style material components and not custom ones.

To achieve this, we’ve added a file called project-container.component.scss-theme.scss. This file imports the material theme and defines a mixin that styles the content with the appropriate color values - pulling color-palettes from the theme.

@import '~@angular/material/theming';

@mixin my-project-container-component-theme($theme) {
  $accent: map-get($theme, accent);

  .active {
    color: mat-color($accent, default-contrast);
    background-color: mat-color($accent);

    &:hover {
      color: mat-color($accent, default-contrast);
      background-color: mat-color($accent);
    }
  }
}
Then those files are referred to in the styles.scss files:

@import 'app/modules/home/page/project-item/project-container.component.scss-theme.scss';

@mixin custom-components-theme($theme) {
  // ...
  @include my-project-container-component-theme($theme);
}

.my-light-theme {
  // ...
  @include custom-components-theme($my-light-theme);
}

.my-dark-theme {
  // ...
  @include custom-components-theme($my-black-theme);
}
The application content needs to be placed inside either a mat-sidenav-container element or have the mat-app-background class applied to work. This application follows the last approach by appending this class to the div that wraps the app-content in the src/app/layout/content-layout/content-layout.component.html file:

<div class="my-dark-theme">
  <div class="mat-app-background">
    <app-nav></app-nav>

      <div class="container">
        <router-outlet></router-outlet>
      </div>

    <app-footer></app-footer>
  </div>
</div>
The height of the viewport the theme should affects is also defined:

.mat-app-background {
  height: 100%;
}
Bootstrap
The ~/src/styles directory can be used for compiling bootstrap and storing other scss resources. To install a custom bootstrap download the source files, extract bootstrap into ~/src/styles/bootstrap, then modify the bootstrap/scss/_variables.scss. Include boostrap in the styles.scss:

@import './styles/bootstrap/scss/bootstrap.scss'; 

   ## add a project to Github using VS Code
   1) view-> command palette 
   2)git init
   3) git add remote
   ## crete module with routing
   ng g module modules/auth --routing 

   ### Build angular project
   
ng build --prod
## create module with routing
ng g m modules/home --routing
