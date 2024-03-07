import { Component } from '@angular/core';
import { Ledger } from '../ledger';

@Component({
  selector: 'app-create-ledger',
  templateUrl: './create-ledger.component.html',
  styleUrls: ['./create-ledger.component.css']
})
export class CreateLedgerComponent {
ledger:Ledger= new Ledger();
onSubmit(){
  console.log(this.ledger);
}
}
