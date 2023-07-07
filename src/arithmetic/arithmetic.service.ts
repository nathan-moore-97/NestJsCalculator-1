import { ImATeapotException, Injectable } from '@nestjs/common';

import { IArithmeticOperator } from './interfaces/IArithmeticOperator';
import { OpcodeEnum } from './enums/OpcodeEnum';

import { 
    AdditionOperator, 
    DivisionOperator, 
    ModuloOperator, 
    MultiplicationOperator, 
    PowerOperator, 
    SubtractionOperator 
} from './Operator';

@Injectable()
export class ArithmeticService {
    private readonly operationHistory: IArithmeticOperator[];

    constructor() { this.operationHistory = []; }

    doOp(a: number, b: number, op: OpcodeEnum): any {
        let exp: IArithmeticOperator = (function() {
            switch(+op) {
                case OpcodeEnum.Add: return new AdditionOperator(a, b);
                case OpcodeEnum.Subtract: return new SubtractionOperator(a, b);
                case OpcodeEnum.Multiply: return new MultiplicationOperator(a, b);
                case OpcodeEnum.Divide: return new DivisionOperator(a, b);
                case OpcodeEnum.Exponentiate: return new PowerOperator(a, b);
                case OpcodeEnum.Modulo: return new ModuloOperator(a, b);
                default:
                    throw new ImATeapotException();
            }
        })();

        this.operationHistory.push(exp);
        return {"result": exp.op()};
    }

    history(): any {
        let ret = []
        for(let i = this.operationHistory.length - 1; i >= 0; i--) {
            ret.push(this.operationHistory[i].toString())
        }

        return {"history": ret};
    }
}
