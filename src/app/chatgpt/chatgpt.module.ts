import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatgptRoutingModule } from './chatgpt-routing.module';
import { ChatgptSingleComponent } from './chatgpt-single/chatgpt-single.component';

@NgModule({
  declarations: [ChatgptSingleComponent],
  imports: [CommonModule, ChatgptRoutingModule],
  exports: [ChatgptSingleComponent],
})
export class ChatgptModule {}
