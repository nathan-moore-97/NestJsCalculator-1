
export enum OpcodeEnum {
    Add,
    Subtract,
    Multiply,
    Divide,
    Exponentiate,
    Modulo,
    Goofy,
}

export function opcodeToString(opcode: OpcodeEnum): string {
    switch(opcode) {
        case OpcodeEnum.Add: return "+";
        case OpcodeEnum.Subtract: return "-";
        case OpcodeEnum.Divide: return "/";
        case OpcodeEnum.Multiply: return "*";
        case OpcodeEnum.Exponentiate: return "^";
        case OpcodeEnum.Modulo: return "%";
        case OpcodeEnum.Goofy: return "~";
        default: 
            return "?"
    }
}
