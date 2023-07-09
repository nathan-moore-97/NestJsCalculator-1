import { Component } from '@angular/core';
import { OpcodeService } from '../services/opcode.service';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
  providers: [ OpcodeService ]
})
export class CalculatorFormComponent {
  supportedOpcodes: string[] = ['?']

  constructor(private opcodeService: OpcodeService) {}

  ngOnInit() {
    this.opcodeService.getListOfSupportedOpcodes().subscribe(res => {
      console.log(res);
    })
  }
}
