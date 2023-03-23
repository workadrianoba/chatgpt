import { Component, OnInit } from '@angular/core';
import { ChatGPTService } from '../shared/chatgpt.service';

@Component({
  selector: 'app-chatgpt-single',
  templateUrl: './chatgpt-single.component.html',
  styleUrls: ['./chatgpt-single.component.scss'],
})
export class ChatgptSingleComponent implements OnInit {
  chatgpt: any;
  spin: boolean = false;
  constructor(public service: ChatGPTService) {}

  ngOnInit(): void {}

  onSearch(keyword: string) {
    this.spin = true;
    this.service.search(keyword).subscribe({
      next: (res: any) => {
        this.chatgpt = res.choices?.[0].message.content;
        console.log(res.choices?.[0].message.content);
      },
      error: (e: any) => {
        console.error(e);
        this.spin = false;
      },
      complete: () => {
        this.spin = false;
      },
    });
  }
}
