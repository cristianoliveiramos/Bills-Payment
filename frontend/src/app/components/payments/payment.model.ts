import { Supplier } from "../suppliers/suppliers.model"

export interface Payment {
  id?: number | undefined,
  supplierID: Supplier | undefined,
  documentCode: number | undefined,
  date: Date | undefined,
  total: number | undefined,
  installments: Installments | undefined
  dateInstallment1?: Date,
  valueInstallment1?: number,
  dateInstallment2?: Date,
  valueInstallment2?: number,
  dateInstallment3?: Date,
  valueInstallment3?: number,
  dateInstallment4?: Date,
  valueInstallment4?: number,
  dateInstallment5?: Date,
  valueInstallment5?: number,
  dateInstallment6?: Date,
  valueInstallment6?: number,
  dateInstallment7?: Date,
  valueInstallment7?: number,
  dateInstallment8?: Date,
  valueInstallment8?: number,
  dateInstallment9?: Date,
  valueInstallment9?: number,
  dateInstallment10?: Date,
  valueInstallment10?: number,
  dateInstallment11?: Date,
  valueInstallment11?: number,
  dateInstallment12?: Date,
  valueInstallment12?: number
}

export interface Installments {
  value: number,
  viewValue: string,
}
