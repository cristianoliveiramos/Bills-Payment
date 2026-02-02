import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './components/template/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { SuppliersCrudComponent } from './views/suppliers-crud/suppliers-crud.component';
import { SuppliersCreateComponent } from './components/suppliers/suppliers-create/suppliers-create.component';
import { SuppliersReadComponent } from './components/suppliers/suppliers-read/suppliers-read.component';
import { SupplierUpdateComponent } from './components/suppliers/supplier-update/supplier-update.component';
import { SuppliersDeleteComponent } from './components/suppliers/suppliers-delete/suppliers-delete.component';
import { SupplierReadInfosComponent } from './components/suppliers/supplier-read-infos/supplier-read-infos.component';
import { PaymentReadComponent } from './components/payments/payment-read/payment-read.component';
import { PaymentCreateComponent } from './components/payments/payment-create/payment-create.component';
import { PaginatorComponent } from './components/template/paginator/paginator.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
  import {MatButtonModule} from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SuppliersReadComponent,
    SuppliersCrudComponent,
    SuppliersCreateComponent,
    SupplierUpdateComponent,
    SuppliersDeleteComponent,
    PaginatorComponent,
    SupplierReadInfosComponent,
    PaymentCreateComponent,
    PaymentReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: PaginatorComponent,
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'pt-BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
