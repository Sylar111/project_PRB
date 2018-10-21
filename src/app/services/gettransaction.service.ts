import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GettransactionService {
  constructor(private http: HttpClient) {}



  getTrans(etherwallet: string): any {
    const urlPrefix = 'http://api-ropsten.etherscan.io/api?module=account&action=txlist&address=';
    const urlSuffix = '&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken';
    return this.http.get(urlPrefix + etherwallet + urlSuffix);


  }

}
