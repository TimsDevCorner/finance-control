import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {ApiUrls} from '../config/api-urls';
import {Observable} from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(ApiUrls.API_BASE + 'sourcelist');
  }

  public get(id: number): Observable<any> {
    return this.httpClient.get(ApiUrls.API_BASE + ApiUrls.API_SOURCE + '/' + id);
  }

  save(source: any): Observable<any> {
    let result: Observable<Object>;
    if (source['href']) {
      result = this.httpClient.put(source.href, source);
    } else {
      result = this.httpClient.post(ApiUrls.API_BASE + ApiUrls.API_SOURCE, source);
    }
    return result;
  }

  remove(href: string) {
    return this.httpClient.delete(href);
  }
}
