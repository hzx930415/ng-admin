import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {WorkspaceComponent} from './workspace/workspace.component';
import {RolePageComponent} from './workspace-page/role-page/role-page.component';


const routes: Routes = [
  {
    path: 'workspace',
    component: WorkspaceComponent,
    children: [
      { path: 'role', component: RolePageComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], exports: [RouterModule],
})
export class WorkspaceRoutingModule {
}
