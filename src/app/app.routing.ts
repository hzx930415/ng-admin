import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WorkspaceComponent } from './workspace/workspace/workspace.component';
import {HeaderComponent} from './workspace/workspace/header/header.component';
import {ConfigPageComponent} from './workspace/workspace-page/config-page/config-page.component';

// import { HomeComponent } from './';
// import { Name2Component } from './';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const routes: Routes = [
  {path: 'header', component: ConfigPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
