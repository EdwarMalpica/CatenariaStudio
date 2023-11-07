import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertInfoComponent } from './components/alerts/alert-info/alert-info.component';
import { AlertErrorComponent } from './components/alerts/alert-error/alert-error.component';
import { AlertMessageComponent } from './components/alerts/alert-message/alert-message.component';
import { AlertSuccessComponent } from './components/alerts/alert-success/alert-success.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { AlertWarnComponent } from './components/alerts/alert-warn/alert-warn.component';
import { MessageService } from 'primeng/api';
import { AlertsService } from './services/alerts.service';



@NgModule({
  declarations: [
    AlertInfoComponent,
    AlertErrorComponent,
    AlertMessageComponent,
    AlertSuccessComponent,
    AlertWarnComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastModule,
    MessageModule,
    MessagesModule,
  ],
  providers: [AlertsService, MessageService],
  exports: [
    AlertInfoComponent,
    AlertErrorComponent,
    AlertMessageComponent,
    AlertSuccessComponent,
    AlertWarnComponent,
  ],
})
export class SharedModule {}
