import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/shared/models/address';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  headOffice:Address = {city: 'Bangalore', state: 'KA', pincode: 560062} 

  // lazy initialized later through api/timer
  branchOffice: Address = undefined 

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      // preserve this in context
      this.branchOffice = {city: 'Pune', state:'MH', pincode: 411001}
    }, 5000)
  }

  handleCall(address: Address) {
    console.log('calling address', address)
  }

  handleEmail(address: Address) {
    console.log('sending email ', address)
  }

}
