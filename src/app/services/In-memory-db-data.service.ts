import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import * as KuralJSON from 'src/db/thirukkural.json';
import * as KuralDetailJSON from 'src/db/detail.json';

@Injectable({ providedIn: 'root' })
export class InMemoryDbDataService implements InMemoryDbService {
  constructor() {}

  createDb(
    reqInfo?: RequestInfo | undefined
  ): {} | Observable<{}> | Promise<{}> {
    let kural = KuralJSON;
    let kural_detail = KuralDetailJSON;
    return { kural: kural, detail: kural_detail };
  }
}
