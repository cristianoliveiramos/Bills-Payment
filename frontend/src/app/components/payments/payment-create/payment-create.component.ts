import { PaymentService } from './../payments.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../suppliers/suppliers.model';
import { SuppliersService } from '../../suppliers/suppliers.service';
import { Installments, Payment } from '../payment.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.scss'],
})
export class PaymentCreateComponent implements OnInit {
  suppliers!: Supplier[];
  payment: Payment = {
    documentCode: undefined,
    date: undefined,
    total: undefined,
    installments: undefined,
    supplierID: undefined,
    valueInstallment1: undefined,
    valueInstallment2: undefined,
    valueInstallment3: undefined,
    valueInstallment4: undefined,
    valueInstallment5: undefined,
    valueInstallment6: undefined,
    valueInstallment7: undefined,
    valueInstallment8: undefined,
    valueInstallment9: undefined,
    valueInstallment10: undefined,
    valueInstallment11: undefined,
    valueInstallment12: undefined,
  };
  installments: Installments[] = [
    { value: 1, viewValue: 'À vista' },
    { value: 2, viewValue: 'Parcelado em 2' },
    { value: 3, viewValue: 'Parcelado em 3' },
    { value: 4, viewValue: 'Parcelado em 4' },
    { value: 5, viewValue: 'Parcelado em 5' },
    { value: 6, viewValue: 'Parcelado em 6' },
    { value: 7, viewValue: 'Parcelado em 7' },
    { value: 8, viewValue: 'Parcelado em 8' },
    { value: 9, viewValue: 'Parcelado em 9' },
    { value: 10, viewValue: 'Parcelado em 10' },
    { value: 11, viewValue: 'Parcelado em 11' },
    { value: 12, viewValue: 'Parcelado em 12' },
  ];
  payments: Payment[] = [];

  constructor(
    private supplierService: SuppliersService,
    private paymentService: PaymentService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.supplierService
      .read()
      .subscribe((suppliers) => (this.suppliers = suppliers));
  }

  save() {
    const installmentValue = Number(this.payment.installments);
    this.installments.forEach((installment) => {
      if (installment.value === installmentValue) {
        const totalByInstallment = this.payment.total! / installmentValue;
        const valueByInstallment = Number(totalByInstallment.toPrecision(5))

        switch (installmentValue) {
          case 1:
            this.payments.push({
              id: this.payment.id,
              documentCode: this.payment.documentCode,
              date: this.payment.date,
              total: this.payment.total,
              installments: this.payment.installments,
              supplierID: this.payment.supplierID,
              dateInstallment1: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+2}-${this.payment.date?.getDate()}`),
              valueInstallment1: valueByInstallment,
            });
            break;
          case 2:
            this.payments.push({
              id: this.payment.id,
              documentCode: this.payment.documentCode,
              date: this.payment.date,
              total: this.payment.total,
              installments: this.payment.installments,
              supplierID: this.payment.supplierID,
              dateInstallment1: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+2}-${this.payment.date?.getDate()}`),
              valueInstallment1: valueByInstallment,
              dateInstallment2: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+3}-${this.payment.date?.getDate()}`),
              valueInstallment2: valueByInstallment,
            });
            break;
          case 3:
            this.payments.push({
              id: this.payment.id,
              documentCode: this.payment.documentCode,
              date: this.payment.date,
              total: this.payment.total,
              installments: this.payment.installments,
              supplierID: this.payment.supplierID,
              valueInstallment1: valueByInstallment,
              valueInstallment2: valueByInstallment,
              valueInstallment3: valueByInstallment,
            });
            break;
          case 4:
            this.payments.push({
              id: this.payment.id,
              documentCode: this.payment.documentCode,
              date: this.payment.date,
              total: this.payment.total,
              installments: this.payment.installments,
              supplierID: this.payment.supplierID,
              dateInstallment1: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+2}-${this.payment.date?.getDate()}`),
              valueInstallment1: valueByInstallment,
              dateInstallment2: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+3}-${this.payment.date?.getDate()}`),
              valueInstallment2: valueByInstallment,
              dateInstallment3: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+4}-${this.payment.date?.getDate()}`),
              valueInstallment3: valueByInstallment,
              dateInstallment4: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+5}-${this.payment.date?.getDate()}`),
              valueInstallment4: valueByInstallment,
            });
            break;
          case 5:
            this.payments.push({
              id: this.payment.id,
              documentCode: this.payment.documentCode,
              date: this.payment.date,
              total: this.payment.total,
              installments: this.payment.installments,
              supplierID: this.payment.supplierID,
              dateInstallment1: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+2}-${this.payment.date?.getDate()}`),
              valueInstallment1: valueByInstallment,
              dateInstallment2: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+3}-${this.payment.date?.getDate()}`),
              valueInstallment2: valueByInstallment,
              dateInstallment3: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+4}-${this.payment.date?.getDate()}`),
              valueInstallment3: valueByInstallment,
              dateInstallment4: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+5}-${this.payment.date?.getDate()}`),
              valueInstallment4: valueByInstallment,
              dateInstallment5: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+6}-${this.payment.date?.getDate()}`),
              valueInstallment5: valueByInstallment,
            });
            break;
          case 6:
            this.payments.push({
              id: this.payment.id,
              documentCode: this.payment.documentCode,
              date: this.payment.date,
              total: this.payment.total,
              installments: this.payment.installments,
              supplierID: this.payment.supplierID,
              dateInstallment1: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+2}-${this.payment.date?.getDate()}`),
              valueInstallment1: valueByInstallment,
              dateInstallment2: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+3}-${this.payment.date?.getDate()}`),
              valueInstallment2: valueByInstallment,
              dateInstallment3: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+4}-${this.payment.date?.getDate()}`),
              valueInstallment3: valueByInstallment,
              dateInstallment4: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+5}-${this.payment.date?.getDate()}`),
              valueInstallment4: valueByInstallment,
              dateInstallment5: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+6}-${this.payment.date?.getDate()}`),
              valueInstallment5: valueByInstallment,
              dateInstallment6: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+7}-${this.payment.date?.getDate()}`),
              valueInstallment6: valueByInstallment,
            });
            break;
          case 7:
            this.payments.push({
              id: this.payment.id,
              documentCode: this.payment.documentCode,
              date: this.payment.date,
              total: this.payment.total,
              installments: this.payment.installments,
              supplierID: this.payment.supplierID,
              dateInstallment1: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+2}-${this.payment.date?.getDate()}`),
              valueInstallment1: valueByInstallment,
              dateInstallment2: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+3}-${this.payment.date?.getDate()}`),
              valueInstallment2: valueByInstallment,
              dateInstallment3: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+4}-${this.payment.date?.getDate()}`),
              valueInstallment3: valueByInstallment,
              dateInstallment4: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+5}-${this.payment.date?.getDate()}`),
              valueInstallment4: valueByInstallment,
              dateInstallment5: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+6}-${this.payment.date?.getDate()}`),
              valueInstallment5: valueByInstallment,
              dateInstallment6: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+7}-${this.payment.date?.getDate()}`),
              valueInstallment6: valueByInstallment,
              dateInstallment7: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+8}-${this.payment.date?.getDate()}`),
              valueInstallment7: valueByInstallment,
            });
            break;
          case 8:
            this.payments.push({
              id: this.payment.id,
              documentCode: this.payment.documentCode,
              date: this.payment.date,
              total: this.payment.total,
              installments: this.payment.installments,
              supplierID: this.payment.supplierID,
              dateInstallment1: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+2}-${this.payment.date?.getDate()}`),
              valueInstallment1: valueByInstallment,
              dateInstallment2: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+3}-${this.payment.date?.getDate()}`),
              valueInstallment2: valueByInstallment,
              dateInstallment3: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+4}-${this.payment.date?.getDate()}`),
              valueInstallment3: valueByInstallment,
              dateInstallment4: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+5}-${this.payment.date?.getDate()}`),
              valueInstallment4: valueByInstallment,
              dateInstallment5: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+6}-${this.payment.date?.getDate()}`),
              valueInstallment5: valueByInstallment,
              dateInstallment6: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+7}-${this.payment.date?.getDate()}`),
              valueInstallment6: valueByInstallment,
              dateInstallment7: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+8}-${this.payment.date?.getDate()}`),
              valueInstallment7: valueByInstallment,
              dateInstallment8: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+9}-${this.payment.date?.getDate()}`),
              valueInstallment8: valueByInstallment,
            });
            break;
          case 9:
            this.payments.push({
              id: this.payment.id,
              documentCode: this.payment.documentCode,
              date: this.payment.date,
              total: this.payment.total,
              installments: this.payment.installments,
              supplierID: this.payment.supplierID,
              dateInstallment1: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+2}-${this.payment.date?.getDate()}`),
              valueInstallment1: valueByInstallment,
              dateInstallment2: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+3}-${this.payment.date?.getDate()}`),
              valueInstallment2: valueByInstallment,
              dateInstallment3: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+4}-${this.payment.date?.getDate()}`),
              valueInstallment3: valueByInstallment,
              dateInstallment4: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+5}-${this.payment.date?.getDate()}`),
              valueInstallment4: valueByInstallment,
              dateInstallment5: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+6}-${this.payment.date?.getDate()}`),
              valueInstallment5: valueByInstallment,
              dateInstallment6: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+7}-${this.payment.date?.getDate()}`),
              valueInstallment6: valueByInstallment,
              dateInstallment7: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+8}-${this.payment.date?.getDate()}`),
              valueInstallment7: valueByInstallment,
              dateInstallment8: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+9}-${this.payment.date?.getDate()}`),
              valueInstallment8: valueByInstallment,
              dateInstallment9: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+10}-${this.payment.date?.getDate()}`),
              valueInstallment9: valueByInstallment,
            });
            break;
          case 10:
            this.payments.push({
              id: this.payment.id,
              documentCode: this.payment.documentCode,
              date: this.payment.date,
              total: this.payment.total,
              installments: this.payment.installments,
              supplierID: this.payment.supplierID,
              dateInstallment1: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+2}-${this.payment.date?.getDate()}`),
              valueInstallment1: valueByInstallment,
              dateInstallment2: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+3}-${this.payment.date?.getDate()}`),
              valueInstallment2: valueByInstallment,
              dateInstallment3: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+4}-${this.payment.date?.getDate()}`),
              valueInstallment3: valueByInstallment,
              dateInstallment4: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+5}-${this.payment.date?.getDate()}`),
              valueInstallment4: valueByInstallment,
              dateInstallment5: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+6}-${this.payment.date?.getDate()}`),
              valueInstallment5: valueByInstallment,
              dateInstallment6: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+7}-${this.payment.date?.getDate()}`),
              valueInstallment6: valueByInstallment,
              dateInstallment7: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+8}-${this.payment.date?.getDate()}`),
              valueInstallment7: valueByInstallment,
              dateInstallment8: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+9}-${this.payment.date?.getDate()}`),
              valueInstallment8: valueByInstallment,
              dateInstallment9: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+10}-${this.payment.date?.getDate()}`),
              valueInstallment9: valueByInstallment,
              dateInstallment10: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+11}-${this.payment.date?.getDate()}`),
              valueInstallment10: valueByInstallment,
            });
            break;
          case 11:
            this.payments.push({
              id: this.payment.id,
              documentCode: this.payment.documentCode,
              date: this.payment.date,
              total: this.payment.total,
              installments: this.payment.installments,
              supplierID: this.payment.supplierID,
              dateInstallment1: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+2}-${this.payment.date?.getDate()}`),
              valueInstallment1: valueByInstallment,
              dateInstallment2: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+3}-${this.payment.date?.getDate()}`),
              valueInstallment2: valueByInstallment,
              dateInstallment3: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+4}-${this.payment.date?.getDate()}`),
              valueInstallment3: valueByInstallment,
              dateInstallment4: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+5}-${this.payment.date?.getDate()}`),
              valueInstallment4: valueByInstallment,
              dateInstallment5: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+6}-${this.payment.date?.getDate()}`),
              valueInstallment5: valueByInstallment,
              dateInstallment6: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+7}-${this.payment.date?.getDate()}`),
              valueInstallment6: valueByInstallment,
              dateInstallment7: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+8}-${this.payment.date?.getDate()}`),
              valueInstallment7: valueByInstallment,
              dateInstallment8: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+9}-${this.payment.date?.getDate()}`),
              valueInstallment8: valueByInstallment,
              dateInstallment9: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+10}-${this.payment.date?.getDate()}`),
              valueInstallment9: valueByInstallment,
              dateInstallment10: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+11}-${this.payment.date?.getDate()}`),
              valueInstallment10: valueByInstallment,
              dateInstallment11: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+12}-${this.payment.date?.getDate()}`),
              valueInstallment11: valueByInstallment,
            });
            break;
          case 12:
            this.payments.push({
              id: this.payment.id,
              documentCode: this.payment.documentCode,
              date: this.payment.date,
              total: this.payment.total,
              installments: this.payment.installments,
              supplierID: this.payment.supplierID,
              dateInstallment1: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+2}-${this.payment.date?.getDate()}`),
              valueInstallment1: valueByInstallment,
              dateInstallment2: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+3}-${this.payment.date?.getDate()}`),
              valueInstallment2: valueByInstallment,
              dateInstallment3: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+4}-${this.payment.date?.getDate()}`),
              valueInstallment3: valueByInstallment,
              dateInstallment4: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+5}-${this.payment.date?.getDate()}`),
              valueInstallment4: valueByInstallment,
              dateInstallment5: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+6}-${this.payment.date?.getDate()}`),
              valueInstallment5: valueByInstallment,
              dateInstallment6: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+7}-${this.payment.date?.getDate()}`),
              valueInstallment6: valueByInstallment,
              dateInstallment7: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+8}-${this.payment.date?.getDate()}`),
              valueInstallment7: valueByInstallment,
              dateInstallment8: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+9}-${this.payment.date?.getDate()}`),
              valueInstallment8: valueByInstallment,
              dateInstallment9: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+10}-${this.payment.date?.getDate()}`),
              valueInstallment9: valueByInstallment,
              dateInstallment10: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+11}-${this.payment.date?.getDate()}`),
              valueInstallment10: valueByInstallment,
              dateInstallment11: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+12}-${this.payment.date?.getDate()}`),
              valueInstallment11: valueByInstallment,
              dateInstallment12: new Date(`${this.payment.date?.getFullYear()}-${this.payment.date?.getMonth()!+13}-${this.payment.date?.getDate()}`),
              valueInstallment12: valueByInstallment,
            });
            break;
        }
        return;
      }
    });

    console.log('PAYMENTS: ', this.payments);
    this.payment = this.payments[0];
    console.log('PAYMENT: ', this.payment);
    this.paymentService.create(this.payment).subscribe(() =>
      this.paymentService.showMessage("Pagamento salvo com sucesso", false)
    )
    this.router.navigate(['/pagamentos'])
  }

  cancel() {
    this.router.navigate(['/pagamentos']);
  }
}
