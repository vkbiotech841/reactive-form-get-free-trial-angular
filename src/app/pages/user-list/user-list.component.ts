import { UtilityService } from './../../common/services/utility.service';
import { PaymentService } from './../../common/services/payment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

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
