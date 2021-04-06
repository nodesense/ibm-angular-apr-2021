import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Address } from '../../models/address';
 

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  // to receive data from parent or for property binding [], 
  // we need to use Input decorator
  //<app-address [address]='headOffice' title="Head Office"

  // assuming the data is passed as input
  @Input()
  address: Address;

  @Input()
  title: string;


  // to send data to parent component from child component,
  // we need to use Output, (event binding)
  // child component is publisher for event or emit the event
  // parent component is a subscriber for event


  // <app-address (callEvent)="eventHandler($event)"
                  // (email)="eventHandler($event)"

  @Output()
  callEvent: EventEmitter<Address> = new EventEmitter();
  
  @Output()
  email: EventEmitter<Address> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCall() {
    // this.address is referenced as $event in html template
    this.callEvent.emit(this.address)
  }

  onEmail() {
    this.email.emit(this.address)
  }

}
