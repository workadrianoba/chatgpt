import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatgptRoutingModule } from './chatgpt-routing.module';
import { ChatgptSingleComponent } from './chatgpt-single/chatgpt-single.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ChatgptSingleComponent],
  imports: [CommonModule, ChatgptRoutingModule, SharedModule],
  exports: [ChatgptSingleComponent],
})
export class ChatgptModule {}
