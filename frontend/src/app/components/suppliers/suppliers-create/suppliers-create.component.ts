import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, Inject, Optional, Self } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { MAT_FORM_FIELD, MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliers-create',
  templateUrl: './suppliers-create.component.html',
  styleUrls: ['./suppliers-create.component.scss']
})
export class SuppliersCreateComponent {



  constructor(private router: Router) {

  }

  createSupplier() {
    this.router.navigate(['/fornecedores'])
  }

  cancel() {
    this.router.navigate(['/fornecedores'])
  }

}
