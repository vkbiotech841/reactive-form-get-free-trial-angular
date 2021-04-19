import { UtilityService } from './../../common/services/utility.service';
import { PaymentService } from './../../common/services/payment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private paymentService: PaymentService,
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.getUserData();
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

}
