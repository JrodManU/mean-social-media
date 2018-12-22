import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { NewMessageFormComponent } from './new-message-form/new-message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    NewMessageFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
