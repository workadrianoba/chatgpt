import { Component, OnInit } from '@angular/core';
import { ChatGPTService } from '../shared/chatgpt.service';

@Component({
  selector: 'app-chatgpt-single',
  templateUrl: './chatgpt-single.component.html',
  styleUrls: ['./chatgpt-single.component.scss'],
})
export class ChatgptSingleComponent implements OnInit {
  chatgpt: any;

  constructor(public service: ChatGPTService) {}

  ngOnInit(): void {}

  onSearch(keyword: string) {
    this.service.search(keyword).subscribe({
      next: (res: any) => {
        this.chatgpt = res.choices?.[0].message.content;
        console.log(res.choices?.[0].message.content);
        console.log(this.chatgpt);
      },
      error: (e: any) => {
        console.error(e);
      },
      complete: () => {},
    });
  }
}
