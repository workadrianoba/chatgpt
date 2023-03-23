import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatGPTService {
  API: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  search(keyword: string) {
    let obj = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: keyword,
        },
      ],
    };

    console.log(obj);
    let url = `${this.API}`;
    return this.http
      .post(url, obj, { headers: this.getAuthHeaders() })
      .pipe(take(1));
  }

  getAuthHeaders() {
    let headers = new HttpHeaders({
      Authorization:
        'Bearer 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',
      Accept: 'application/json',
    });

    return headers;
  }
}
