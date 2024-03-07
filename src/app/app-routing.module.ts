import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLedgerComponent } from './create-ledger/create-ledger.component';

const routes: Routes = [
  {path:'',redirectTo:'createledger',pathMatch:'full'},
  {path:'createledger',component:CreateLedgerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
