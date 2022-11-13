import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Subject,BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ThirukkuralService {
  kuralUrl = 'api/kural';
  kuralDetailUrl = 'api/detail';

  private http = inject(HttpClient);

  //#region DB
  getAllKural(): Observable<any[]> {
    return this.http.get<any>(this.kuralUrl).pipe(
      map(m => {
        return m.kural;
      })
    );
  }

  getKuralDetail(): Observable<any[]> {
    return this.http.get<any>(this.kuralDetailUrl).pipe(
      map(m => {
        return m.kural_detail[0];
      })
    );
  }

  //#endregion

  //#region sharing Data
  private chapterDetails = new BehaviorSubject<any>(undefined);
  public chapter_details$ = this.chapterDetails.asObservable();

  updateChapterDetail(data: any) {    
    this.chapterDetails.next(data);
  }

  //#endregion
}
