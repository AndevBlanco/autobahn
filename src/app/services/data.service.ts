import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://verkehr.autobahn.de/o/autobahn/';

  constructor(private http: HttpClient) {}

  getAllRoads(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
