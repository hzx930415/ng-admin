import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace/workspace.component';
import { WorkspaceRoutingModule } from './workspace.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HeaderComponent } from './workspace/header/header.component';
import { SiderComponent } from './workspace/sider/sider.component';
import {WorkspacePageModule} from './workspace-page/workspace-page.module';
import { WorkspacePageComponent } from './workspace-page/workspace-page.component';
import { RolePageComponent } from './workspace-page/role-page/role-page.component';
import { ConfigPageComponent } from './workspace-page/config-page/config-page.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    WorkspaceRoutingModule
  ],
  declarations: [WorkspaceComponent, HeaderComponent, SiderComponent, WorkspacePageComponent, RolePageComponent, ConfigPageComponent]
})
export class WorkspaceModule { }
