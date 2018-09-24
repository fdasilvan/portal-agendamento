import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThfModule } from '@totvs/thf-ui';
import { ThfListModule } from '@totvs/thf-ui/components/thf-list';

import { AppComponent } from './app.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleListComponent,
    ChatComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ThfModule,
    ThfListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
