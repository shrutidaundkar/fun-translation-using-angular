import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { translateResponse } from './translateResponse';
@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  yodaErrMsg = "";
  reqCount: number = 0;
  
  constructor(private http: HttpClient) { }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async getYodaTranslation(msg: string): Promise<Observable<translateResponse>> {
    
    this.reqCount += 1;

    const res = this.http.get<translateResponse>(`https://api.funtranslations.com/translate/yoda.json?text=${msg}`).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {   // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else { // server-side error
          errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }
        this.yodaErrMsg = errorMessage;
        return throwError(errorMessage);
      })
    );
    await this.delay(1000);
    return res;
  }
  async getMinionTranslation(msg: string): Promise<Observable<translateResponse>> {
    
    this.reqCount += 1;

    const res = this.http.get<translateResponse>(`https://api.funtranslations.com/translate/minion.json?text=${msg}`).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {   // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else { // server-side error
          errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }
        this.yodaErrMsg = errorMessage;
        return throwError(errorMessage);
      })
    );
    await this.delay(1000);
    return res;
  }
  async getPirateTranslation(msg: string): Promise<Observable<translateResponse>> {
    
    this.reqCount += 1;

    const res = this.http.get<translateResponse>(`https://api.funtranslations.com/translate/pirate.json?text=${msg}`).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {   // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else { // server-side error
          errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }
        this.yodaErrMsg = errorMessage;
        return throwError(errorMessage);
      })
    );
    await this.delay(1000);
    return res;
  }
}
