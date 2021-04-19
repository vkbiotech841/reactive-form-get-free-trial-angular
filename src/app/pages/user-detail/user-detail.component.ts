import { PaymentService } from './../../common/services/payment.service';
import { UtilityService } from './../../common/services/utility.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/common/models/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userDetil = new user();

  userDetailForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  monthlyAdvertisingBudget: FormControl;
  phoneNumber: FormControl;

  isSubmited: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
    private paymentService: PaymentService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.initializeAndValidateForm();
  }

  initializeAndValidateForm() {
    this.firstName = new FormControl("", [Validators.required]);
    this.lastName = new FormControl("", [Validators.required]);
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.monthlyAdvertisingBudget = new FormControl("", [Validators.required]);
    this.phoneNumber = new FormControl("", [Validators.required]);

    this.userDetailForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      monthlyAdvertisingBudget: this.monthlyAdvertisingBudget,
      phoneNumber: this.phoneNumber
    })
  }



  submitUserDetails() {
    this.isSubmited = true;
    if (this.userDetailForm.invalid) {
      this.utilityService.showError("Please Fill All Mendatory(*) fields before submittion", "Try Again");
    } else {
      this.userDetil.firstName = this.firstName.value;
      this.userDetil.lastName = this.lastName.value;
      this.userDetil.email = this.email.value;
      this.userDetil.monthlyAdvertisingBudget = this.monthlyAdvertisingBudget.value;
      this.userDetil.phoneNumber = this.phoneNumber.value;
      const data = this.userDetil;
      console.log("data", data);
      this.paymentService.postData(data)
        .subscribe(result => {
          this.utilityService.showSuccess("", "Your Request for Free Trial is Successfully Submitted.");
          this.router.navigate(["/"]);
        }, error => {
          this.utilityService.showError("", "Something Went Wrong.");
        })
    }
  }

}
