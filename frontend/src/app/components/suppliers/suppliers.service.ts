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
  URL = 'http://localhost:3000';

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
    const url = `${this.URL}/suppliers`
    return this.http.get<Supplier[]>(url).pipe(
      map((obj) => obj),
      catchError((err) => this.errorHandler(err))
    );
  }

  create(supplier: Supplier): Observable<Supplier> {
    const url = `${this.URL}/suppliers`
    return this.http.post<Supplier>(url, supplier).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string | null): Observable<Supplier> {
    const url = `${this.URL}/supplier/${id}`;
    console.log(url)
    return this.http.get<Supplier>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(supplier: Supplier): Observable<Supplier> {
    const url = `${this.URL}/${supplier.id}`;

    return this.http.put<Supplier>(url, supplier).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    return EMPTY;
  }
}
