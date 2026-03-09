import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Payment } from './payment.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) {}

  showMessage(msg: string, isError: boolean): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  convertDate(date: Date): string {
    let toDate = new Date(date);

    const month = toDate.getMonth();

    const dateFormatted = `${toDate.getFullYear()}-${month < 10 ? `0${month}` : `${month}`}-${toDate.getDate()}`;

    return dateFormatted;
  }

  create(payment: Payment): Observable<Payment> {
    let {
      date,
      documentCode,
      installments,
      supplierID,
      total,
      dateInstallment1,
      valueInstallment1,
      dateInstallment2,
      valueInstallment2,
      dateInstallment3,
      valueInstallment3,
      dateInstallment4,
      valueInstallment4,
      dateInstallment5,
      valueInstallment5,
      dateInstallment6,
      valueInstallment6,
      dateInstallment7,
      valueInstallment7,
      dateInstallment8,
      valueInstallment8,
      dateInstallment9,
      valueInstallment9,
      dateInstallment10,
      valueInstallment10,
      dateInstallment11,
      valueInstallment11,
      dateInstallment12,
      valueInstallment12,
    } = payment;
    let datePayment = this.convertDate(date!);
    let dateInstallment1Formatted = this.convertDate(dateInstallment1!);
    let dateInstallment2Formatted = this.convertDate(dateInstallment2!);
    let dateInstallment3Formatted = this.convertDate(dateInstallment3!);
    let dateInstallment4Formatted = this.convertDate(dateInstallment4!);
    let dateInstallment5Formatted = this.convertDate(dateInstallment5!);
    let dateInstallment6Formatted = this.convertDate(dateInstallment6!);
    let dateInstallment7Formatted = this.convertDate(dateInstallment7!);
    let dateInstallment8Formatted = this.convertDate(dateInstallment8!);
    let dateInstallment9Formatted = this.convertDate(dateInstallment9!);
    let dateInstallment10Formatted = this.convertDate(dateInstallment10!);
    let dateInstallment11Formatted = this.convertDate(dateInstallment11!);
    let dateInstallment12Formatted = this.convertDate(dateInstallment12!);

    const url = `${this.URL}/payments`;
    return this.http
      .post<Payment>(url, {
        date: datePayment,
        documentCode,
        installments,
        supplierID,
        total,
        dateInstallment1: dateInstallment1Formatted === 'NaN-NaN-NaN' ? dateInstallment2Formatted = null as any : dateInstallment1Formatted,
        valueInstallment1,
        dateInstallment2: dateInstallment2Formatted === 'NaN-NaN-NaN' ? dateInstallment2Formatted = null as any : dateInstallment2Formatted,
        valueInstallment2,
        dateInstallment3: dateInstallment3Formatted === 'NaN-NaN-NaN' ? dateInstallment3Formatted = null as any : dateInstallment3Formatted,
        valueInstallment3,
        dateInstallment4: dateInstallment4Formatted === 'NaN-NaN-NaN' ? dateInstallment4Formatted = null as any : dateInstallment4Formatted,
        valueInstallment4,
        dateInstallment5: dateInstallment5Formatted === 'NaN-NaN-NaN' ? dateInstallment5Formatted = null as any : dateInstallment5Formatted,
        valueInstallment5,
        dateInstallment6: dateInstallment6Formatted === 'NaN-NaN-NaN' ? dateInstallment6Formatted =   null as any : dateInstallment6Formatted,
        valueInstallment6,
        dateInstallment7: dateInstallment7Formatted === 'NaN-NaN-NaN' ? dateInstallment7Formatted = null as any : dateInstallment7Formatted,
        valueInstallment7,
        dateInstallment8: dateInstallment8Formatted === 'NaN-NaN-NaN' ? dateInstallment8Formatted = null as any : dateInstallment8Formatted,
        valueInstallment8,
        dateInstallment9: dateInstallment9Formatted === 'NaN-NaN-NaN' ? dateInstallment9Formatted = null as any : dateInstallment9Formatted,
        valueInstallment9,
        dateInstallment10: dateInstallment10Formatted === 'NaN-NaN-NaN' ? dateInstallment10Formatted = null as any : dateInstallment10Formatted,
        valueInstallment10,
        dateInstallment11: dateInstallment11Formatted === 'NaN-NaN-NaN' ? dateInstallment11Formatted = null as any : dateInstallment11Formatted,
        valueInstallment11,
        dateInstallment12: dateInstallment12Formatted === 'NaN-NaN-NaN' ? dateInstallment12Formatted = null as any : dateInstallment12Formatted,
        valueInstallment12,
      })
      .pipe(
        map((obj) => console.log(obj)),
        catchError((error) => this.errorHandler(error)),
      );
  }

  read() {
    const url = `${this.URL}/payments`;
    this.http.get<Payment>(url).pipe(
      map((obj) => obj),
      catchError((error) => error),
    );
  }

  errorHandler(e: any): Observable<any> {
    return EMPTY;
  }
}
