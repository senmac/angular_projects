import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
// import { FormControl } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'pm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer;

  constructor(public fb: FormBuilder) {
    this.customer = new Customer();
  }

  ngOnInit() {
    /*this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    });*/

    /*this.customerForm.patchValue({
      firstName: 'Seen',
      lastName: 'MAdukkamoottil'
    }); */

    this.customerForm = this.fb.group({
      firstName: ['Sen', [Validators.required, Validators.minLength(3)]],
      lastName: { value: 'Ben', disabled: false },
      email: ['', [Validators.pattern('[a-z0-9._]+@[a-z0-9-.]+'), Validators.minLength(3)]]
    });
  }

  submitForm() {
    console.log(this.customerForm.value);
  }

}
