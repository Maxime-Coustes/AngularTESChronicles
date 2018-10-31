import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifCaracPipe } from 'app/shared/pipe/modif-carac.pipe';
import { CaseInfoComponent } from './case-info/case-info.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from 'app/shared/dropdown/dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule
  ],
  declarations: [ModifCaracPipe, CaseInfoComponent,
    DropdownComponent
  ],
  exports: [ModifCaracPipe, CaseInfoComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
