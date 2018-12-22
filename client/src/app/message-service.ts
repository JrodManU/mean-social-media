import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  url = 'http://localhost:3000/messages';

  constructor(private http: HttpClient) {

  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.url)
      .pipe(
        catchError(this.handleError('getMessages', []))
      );
  }

  createMessage(message: Message) {
    this.http.post(this.url, message, {})
      .pipe(
        catchError(this.handleError('createMessage', message));
      )
  }

  private handleError<T> (operation, result: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(operation + " failed.");
      //of outputs everything at once
      return of(result as T);
    };
  }
}
