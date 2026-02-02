import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SuppliersReadComponent } from './components/suppliers/suppliers-read/suppliers-read.component';
import { SuppliersCreateComponent } from './components/suppliers/suppliers-create/suppliers-create.component';
import { SupplierUpdateComponent } from './components/suppliers/supplier-update/supplier-update.component';
import { SuppliersDeleteComponent } from './components/suppliers/suppliers-delete/suppliers-delete.component';
import { PaymentReadComponent } from './components/payments/payment-read/payment-read.component';
import { PaymentCreateComponent } from './components/payments/payment-create/payment-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'fornecedores',
    component: SuppliersReadComponent,
  },
  {
    path: 'incluir-fornecedor',
    component: SuppliersCreateComponent,
  },
  {
    path: 'editar-fornecedor/:id',
    component: SupplierUpdateComponent,
  },
  {
    path: 'excluir-fornecedor/:id',
    component: SuppliersDeleteComponent,
  },
  {
    path: 'pagamentos',
    component: PaymentReadComponent
  },
  {
    path: 'incluir-pagamento',
    component: PaymentCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
