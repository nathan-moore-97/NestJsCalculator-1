import { Injectable } from '@angular/core';
import { Enviornment } from '../enviornment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class OpcodeService {
  supportedOpcodes: string[] = [];

  constructor(private http: HttpClient) {}

  getListOfSupportedOpcodes() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('Access-Control-Allow-Origin', '*')
      .set('allow-origins', '*');
    
    return this.http.get(Enviornment.serverUrl + "/opcode", {'headers':  headers});
  }
}


