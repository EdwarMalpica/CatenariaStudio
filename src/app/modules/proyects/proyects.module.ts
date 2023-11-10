import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectsRoutingModule } from './proyects-routing.module';
import { ProyectsComponent } from './proyects.component';
import { ProjectContainerBoxComponent } from './project-container-box/project-container-box.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { DISQUS_SHORTNAME, DisqusModule } from 'ngx-disqus';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDisqusService } from 'src/app/modules/services/my-disqus.service';


@NgModule({
  declarations: [
    ProyectsComponent,
    ProjectContainerBoxComponent,
    ViewProjectComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ProyectsRoutingModule,
    DisqusModule],
  providers: [
    MyDisqusService,
    { provide: DISQUS_SHORTNAME, useValue: 'catenariastudio-1' },
  ],
})
export class ProyectsModule {}
