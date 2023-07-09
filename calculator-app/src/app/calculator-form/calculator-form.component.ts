import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss']
})
export class CalculatorFormComponent {
  // TODO: Get all supported opcodes off the server
  supportedOpcodes = ['+', '-', '/', '*']
}
