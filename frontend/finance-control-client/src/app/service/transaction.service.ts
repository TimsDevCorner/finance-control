import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from '../../../node_modules/rxjs';
import { ApiUrls } from '../config/api-urls';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(ApiUrls.API_BASE + 'transactionlist');
  }

  public get(id: number): Observable<any> {
    return this.httpClient.get(ApiUrls.API_BASE + ApiUrls.API_TRANSACTION + '/' + id);
  }

  save(transaction: any): Observable<any> {
    let result: Observable<Object>;
    if (transaction['href']) {
      result = this.httpClient.put(transaction.href, transaction);
    } else {
      result = this.httpClient.post(ApiUrls.API_BASE + ApiUrls.API_TRANSACTION, transaction);
    }
    return result;
  }

  remove(href: string) {
    return this.httpClient.delete(href);
  }


}
