import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilityService } from './../../common/services/utility.service';
import { PaymentService } from './../../common/services/payment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  advertimentForm: FormGroup;
  isAdvertisement: FormControl;



  constructor(
    private paymentService: PaymentService,
    private utilityService: UtilityService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }


  initiateAndValidateForm() {
    this.isAdvertisement = new FormControl("", [Validators.required]);

    this.advertimentForm = this.formBuilder.group({
      isAdvertisement: this.isAdvertisement
    })

  }


  userDetail: any;
  getUserData() {
    this.paymentService.getData()
      .subscribe(result => {
        this.userDetail = result;
        console.log("userDetail", this.userDetail);
      }, error => {
        this.utilityService.showError("error", "Something went wrong");
      })
  };

  toggleBudgets(value) {
    console.log("budget", value);
  };

}
