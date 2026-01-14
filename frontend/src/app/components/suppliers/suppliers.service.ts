import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Supplier } from './suppliers.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService {
  URL = 'http://localhost:3000/suppliers';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string, isError: boolean): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  read(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.URL).pipe(
      map((obj) => obj),
      catchError((err) => this.errorHandler(err))
    );
  }

  create(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.URL, supplier).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    return EMPTY;
  }
}
