import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Suppliers } from './suppliers.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService {
  URL = 'http://localhost:3000/suppliers';

  constructor(private http: HttpClient) {}

  read(): Observable<Suppliers[]> {
    return this.http.get<Suppliers[]>(this.URL).pipe(map((obj) => obj), catchError(err => this.errorHandler(err)));
  }

  errorHandler(e: any): Observable<any> {
    return EMPTY
  }
}
