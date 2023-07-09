import { OpcodeEnum } from "./enums/OpcodeEnum";
import { IArithmeticOperator } from "./interfaces/IArithmeticOperator";


class ArithmeticOperator implements IArithmeticOperator {
    a: number;
    b: number;
    opcode: OpcodeEnum = OpcodeEnum.Unknown;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
    
    opcodeToString(): string {
        switch(this.opcode) {
            case OpcodeEnum.Add: return "+";
            case OpcodeEnum.Subtract: return "-";
            case OpcodeEnum.Divide: return "/";
            case OpcodeEnum.Multiply: return "*";
            case OpcodeEnum.Exponentiate: return "^";
            case OpcodeEnum.Modulo: return "%";
            case OpcodeEnum.Unknown: 
            default: 
                return "?"
        }
    }

    op(): number { throw new Error("Method not implemented."); }

    toString(): string {
        return `${this.a} ${this.opcodeToString()} ${this.b} = ${this.op()}`;
    }
}

class DivisorOperator extends ArithmeticOperator {
    override op () {
        if (this.b === 0) return undefined;
        return NaN;
    }
}

export class AdditionOperator extends ArithmeticOperator {
    override opcode = OpcodeEnum.Add;
    override op() { return this.a + this.b; }
}

export class SubtractionOperator extends ArithmeticOperator {
    override opcode = OpcodeEnum.Subtract;
    override op() { return this.a - this.b; }
}

export class MultiplicationOperator extends ArithmeticOperator {
    override opcode = OpcodeEnum.Multiply;
    override op() { return this.a * this.b; }
}

export class ModuloOperator extends DivisorOperator {
    override opcode = OpcodeEnum.Modulo;
    override op() {
        if(super.op() == undefined) { return undefined; }

        return this.a % this.b;
    }
}

export class DivisionOperator extends DivisorOperator {
    override opcode = OpcodeEnum.Divide;
    override op() {
        if(super.op() == undefined) { return undefined; }

        return this.a / this.b;
    }
}

export class PowerOperator extends ArithmeticOperator {
    override opcode = OpcodeEnum.Exponentiate;
    override op() { return this.a ** this.b; }
}
