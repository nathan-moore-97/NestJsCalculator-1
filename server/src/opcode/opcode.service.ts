import { Injectable } from '@nestjs/common';
import { OpcodeEnum, opcodeToString } from 'src/arithmetic/enums/OpcodeEnum';

@Injectable()
export class OpcodeService {
    getSupportedOpcodes(): string[] {
        let genOpcodes: string[] = [];

        for(const o in OpcodeEnum) {
            if (isNaN(Number(o)) ) {
                continue
            }

            genOpcodes.push(opcodeToString(Number(o)));
        }

        return genOpcodes;
    }
}
